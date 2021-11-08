import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { User } from '../login/user';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements OnInit {
  accounts!: any;
  constructor(public LoginService: LoginService) {}

  ngOnInit(): void {}
}
