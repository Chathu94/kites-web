import { AbstractControl, FormGroup } from '@angular/forms';

export function MatchPassword(AC: AbstractControl) {
  const password = AC.root.get('password'); // to get value in input tag
  const confirmPassword = AC.root.get('confirm'); // to get value in input tag
  if (password && confirmPassword && password.value !== confirmPassword.value) {
    console.log('set Error', AC.root);
    if (AC === confirmPassword) {
      return { MatchPassword: true };
    }
    AC.root['controls'].confirm.setErrors(
      { MatchPassword: true },
      { emitEvent: true }
    );
  } else if (password && confirmPassword) {
    if (AC === confirmPassword) {
      return null;
    }
    AC.root['controls'].confirm.setErrors(null, { emitEvent: true });
  }
}
