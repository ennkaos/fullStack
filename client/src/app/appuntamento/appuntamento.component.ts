import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AppuntamentoService } from './appuntamento.service';
import { isFuture, isPast, isToday, parseISO } from 'date-fns';
@Component({
  selector: 'app-appuntamento',
  templateUrl: './appuntamento.component.html',
  styleUrls: ['./appuntamento.component.css'],
})
export class AppuntamentoComponent implements OnInit {
  name!: string | null;
  accType!: string | null;
  isAdmin!: boolean | null;
  firstName!: string | null;
  lastName!: string | null;
  page: string = 'Active';
  filteredAcc!: any;
  email!: string | null;
  todayAppointments!: any;
  activeAppointments!: any;

  historyAppointments!: any;
  appointments!: any;
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    public AppuntoService: AppuntamentoService
  ) {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.name = localStorage.getItem('user');
    if (localStorage.getItem('isAdmin') === 'true') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
    this.accType = localStorage.getItem('typeofAcc');
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
    this.email = localStorage.getItem('email');
    this.form = this.fb.group({});
    console.log(this.accType, this.firstName, this.email, this.lastName);

    this.AppuntoService.getAppointents().subscribe((item) => {
      this.appointments = item;

      this.getData(this.page);
      console.log(this.appointments);
    });
  }
  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.appointments.filter(
      (product: any) =>
        product.name.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  changePage(option: string) {
    this.page = option;
    this.getData(this.page);
  }
  getData(page: string) {
    if (page === 'Active') {
      this.todayAppointments = this.appointments
        .filter((item: any) => (isToday(parseISO(item.date)) ? item : null))
        .filter((item: any) => item != null);
      this.activeAppointments = this.appointments
        .map((item: any) =>
          isFuture(parseISO(item.date)) === true ? item : null
        )
        .filter((item: any) => item != null)
        .sort(
          (a: any, b: any) =>
            new Date(a.date).setHours(0, 0, 0, 0) -
            new Date(b.date).setHours(0, 0, 0, 0)
        );

      this.activeAppointments = this.activeAppointments.concat(
        this.todayAppointments
      );
    } else if (page === 'History') {
      this.historyAppointments = this.historyAppointments
        .map((item: any) =>
          isPast(parseISO(item.date)) === true ? item : null
        )
        .filter((item: any) => item != null);
    }
  }
}
