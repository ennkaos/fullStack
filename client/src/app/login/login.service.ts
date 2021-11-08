import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable, pipe, Subscriber, Subscription } from 'rxjs';
import { User } from './user';
import { LoginGuardGuard } from '../auth/login-guard.guard';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  name!: string;
  account!: User[];
  email!: string;
  firstName!: string;
  lastName!: string;
  isAdmin!: boolean;
  accounts: any;
  accountsWithType: any;
  typeOfAcc!: string;
  isConnected!: boolean;
  url: string = 'http://localhost:3000';
  constructor(
    public http: HttpClient,
    public LoginGuard: LoginGuardGuard,
    public router: Router
  ) {}
  getAccounts(): Observable<any> {
    this.accounts = this.http.get(this.url + '/doctors').pipe(
      tap((result) => {
        JSON.stringify(result);
      })
    );
    return this.accounts;
  }

  getAccount(email?: string, password?: string): Subscription {
    return this.getAccounts().subscribe((item) => {
      this.account = item;
      if (email && password) {
        const result = this.account.filter((item) => item.email === email);
        if (result[0].password === password) {
          this.name = result[0].firstName;
          this.isAdmin = result[0].administrator;
          this.typeOfAcc = result[0].typeOfAcc;
          if (this.name && this.typeOfAcc) {
            localStorage.setItem('user', this.name);
            localStorage.setItem('isAdmin', String(this.isAdmin));
            localStorage.setItem('typeofAcc', this.typeOfAcc);
            localStorage.setItem('email', result[0].email);
            localStorage.setItem('firstName', result[0].firstName);
            localStorage.setItem('lastName', result[0].lastName);
            this.LoginGuard.canActivate();

            setTimeout(() => {
              window.location.reload();
            }, 500);
            console.log('Loged in with succes as ' + this.name);
            return true;
          } else {
            console.log('Something Wrong 401');
            return false;
          }
        } else {
          console.log('Email or Password is wrong');
          return false;
        }
      } else {
        console.log('Insert an email and a password');
        return false;
      }
    });
  }

  logout() {
    console.log('You have been Loged Out');

    localStorage.clear();
    this.LoginGuard.canActivate();
  }
}
