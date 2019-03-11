import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private router: Router) {}

  ngOnInit() {
  }

  async onSubmit() {
    await this.router.navigateByUrl('/dashboard');
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.onSubmit();
    }
  }
}
