import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  constructor(
    public fb: FormBuilder,
    public registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: Math.random() * 10,
      email: [
        '',
        [Validators.email, Validators.required, Validators.minLength(4)],
      ],
      verifyEmail: [
        '',
        [Validators.email, Validators.required, Validators.minLength(4)],
      ],
      password: ['', [Validators.required, Validators.minLength(4)]],
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      createdAt: new Date(),
      administrator: false,
      typeOfAcc: 'patience',
    });
  }
  onSubmit() {
    this.registerService.createAccountDoctor(this.form.value);
  }
}
