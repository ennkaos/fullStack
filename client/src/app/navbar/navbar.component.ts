import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';

import { LoginGuardGuard } from '../auth/login-guard.guard';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  result: any = null;
  name: string | null = '';
  isAdmin: boolean = false;
  accType!: string | null;
  isDoctor!: boolean;
  isPatience!: boolean;
  isLoggedIn: boolean = true;

  constructor(
    public authGuard: LoginGuardGuard,
    public LoginService: LoginService,
    public router: Router
  ) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.name = localStorage.getItem('user');
    if (localStorage.getItem('isAdmin') === 'true') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }

    this.accType = localStorage.getItem('typeofAcc');
    if (this.name != null && this.isAdmin != null && this.accType != null) {
      this.result = this.LoginService.getAccount();
      if (this.accType === 'doctor') {
        this.isDoctor = true;
        this.isPatience = false;
      } else if (this.accType === 'patience') {
        this.isDoctor = false;
        this.isPatience = true;
      } else {
        this.isDoctor = true;
        this.isPatience = true;
      }
    } else {
      this.result = null;
    }
  }

  onLogOut() {
    this.result = null;
    this.LoginService.logout();
  }
  Register() {
    this.isLoggedIn = !this.isLoggedIn;
    if (this.isLoggedIn) {
      this.router.navigate(['/register']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
