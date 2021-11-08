import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppServiceService } from '../app-service.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardGuard implements CanActivate {
  isLoggedIn!: boolean;
  email!: string | null;
  isAdmin!: boolean | null;
  typeOfAcc!: string | null;
  constructor(private router: Router) {}
  canActivate(): any {
    this.email = localStorage.getItem('user');
    if (localStorage.getItem('isAdmin') === 'true') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }

    this.typeOfAcc = localStorage.getItem('typeofAcc');
    console.log(this.email, this.typeOfAcc, this.isAdmin);
    // check acc type
    // not logged in so redirect to login page with the return url

    if (this.typeOfAcc === 'doctor' && this.isAdmin) {
      this.router.navigate(['/doctors']);
      return {
        isAdmin: this.isAdmin,
        name: this.email,
        typeof: this.typeOfAcc,
      };
    } else if (this.typeOfAcc === 'doctor' && !this.isAdmin) {
      this.router.navigate(['/patience']);
      return {
        isAdmin: this.isAdmin,
        name: this.email,
        typeof: this.typeOfAcc,
      };
    } else if (this.typeOfAcc === 'patience' && !this.isAdmin) {
      this.router.navigate(['/appuntamento']);
      return {
        isAdmin: this.isAdmin,
        name: this.email,
        typeof: this.typeOfAcc,
      };
    } else {
      this.router.navigate(['/login']);
    }
  }
}
