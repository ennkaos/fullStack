import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../login/user';
import { Router } from '@angular/router';
import { tap } from 'rxjs/internal/operators/tap';
import { LoginService } from '../login/login.service';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  url: string = 'http://localhost:3000';
  accId!: any;

  constructor(
    public http: HttpClient,
    public router: Router,
    public lService: LoginService
  ) {}
  createAccountDoctor(user: User) {
    if (user) {
      this.lService.getAccounts().subscribe((item) => {
        const result = item.filter((email: any) => email.email === user.email);
        console.log(result);
        if (result.length === 0) {
          this.http.post(this.url + '/doctors', user).subscribe((item) => {
            this.accId = item;
          });
          console.log(`User ${user.email} was created sucesfully`);
          this.router.navigate(['/login']);
        } else {
          console.log('User Already exist');
          alert('User Already Exist');
        }
      });
    } else {
      console.log('An Error was Ocured');
    }
  }
}
