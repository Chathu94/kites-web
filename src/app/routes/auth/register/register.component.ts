import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from '../../../core/validators/password-confirm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroupContact: FormGroup;
  formGroupCompany: FormGroup;
  formGroupLoginInfo: FormGroup;

  constructor(private router: Router, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroupLoginInfo = this._formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, MatchPassword])],
      confirm: ['', Validators.compose([Validators.required, MatchPassword])],
    });
    this.formGroupContact = this._formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required]
    });
    this.formGroupCompany = this._formBuilder.group({
      name: ['', Validators.required],
      br: ['', Validators.required],
      caddress: ['', Validators.required]
    });
  }

  async onSubmit() {
    await this.router.navigateByUrl('/dashboard');
  }

  async onLogin() {
    await this.router.navigateByUrl('/login');
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.onSubmit();
    }
  }
}
