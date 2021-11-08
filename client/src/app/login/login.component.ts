import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoginGuardGuard } from '../auth/login-guard.guard';
import { LoginService } from './login.service';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isAdmin!: boolean;
  accountName!: string;
  accountType!: string;

  form!: FormGroup;
  constructor(
    public fb: FormBuilder,
    public loginService: LoginService,
    public LoginGuard: LoginGuardGuard
  ) {}

  ngOnInit(): void {
    this.LoginGuard.canActivate();
    this.form = this.fb.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  async onSubmit(value: boolean) {
    const email = this.form.value.email;
    const password = this.form.value.password;
    if (email && password) {
      await this.loginService.getAccount(email, password);
      this.LoginGuard.canActivate();
    } else {
      console.log('No Email and Password Provided');
    }
  }
}
