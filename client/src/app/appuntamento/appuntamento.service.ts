import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, pipe, Subject, Subscriber, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Appuntamento } from './appuntamento';
@Injectable({
  providedIn: 'root',
})
export class AppuntamentoService {
  url: string = 'http://localhost:3000';
  accounts!: any;
  filteredAcc!: any;
  appuntamenti!: any;
  appuntamento!: any;

  constructor(public http: HttpClient, public router: Router) {}

  getTypeofAcc(typeAcc: string) {
    let aq = new Subject<any>();
    this.accounts = this.http.get(this.url + '/doctors').pipe(
      tap((result) => {
        JSON.stringify(result);
      })
    );

    this.accounts.subscribe({
      next: (item: any) => {
        this.accounts = item;

        aq.next(
          this.accounts.filter((item: any) => item.typeOfAcc === typeAcc)
        );
      },
    });

    return aq.asObservable();
  }
  getAppointents(): Observable<Appuntamento> {
    this.appuntamenti = this.http.get(this.url + '/appuntamento').pipe(
      tap((item) => {
        JSON.stringify(item);
      })
    );
    return this.appuntamenti;
  }
  makeAppointment(item: Appuntamento) {
    if (item) {
      this.http.post(this.url + '/appuntamento', item).subscribe((item) => {
        this.appuntamento = item;
        console.log(
          `Appuntamento ${this.appuntamento.id} was created sucesfully`
        );

        setTimeout(() => {
          window.location.reload();
        }, 500);
        this.router.navigate(['/appuntamento']);
      });
    } else {
      console.log('An Error was Ocured');
    }
  }
  deleteAppointment(id: string) {
    return this.http
      .delete(this.url + `/appuntamento/${id}`)
      .pipe(tap((data) => console.log('deleteProduct: ' + id)));
  }
}
