import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  isAdmin!: boolean;
  accountName!: string;
  accountType!: string;

  form!: FormGroup;
  constructor(public fb: FormBuilder, public loginService: LoginService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
      isAdmin: true,
    });
  }
  onSubmit() {
    this.loginService.getAccount(
      this.form.value.email,
      this.form.value.password
    );
  }
}
