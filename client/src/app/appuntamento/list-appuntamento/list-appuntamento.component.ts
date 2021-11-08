import { Component, Input, OnInit, Output } from '@angular/core';
import { isFuture, isToday, parseISO } from 'date-fns';
import { Appuntamento } from '../appuntamento';
import { AppuntamentoService } from '../appuntamento.service';

@Component({
  selector: 'app-list-appuntamento',
  templateUrl: './list-appuntamento.component.html',
  styleUrls: ['./list-appuntamento.component.css'],
})
export class ListAppuntamentoComponent implements OnInit {
  @Input()
  appuntamenti!: any;
  todayApp!: any;
  isAdmin!: any;
  _listFilter = '';
  _typeofSearch = 'name';
  get listFilter(): string {
    return this._listFilter;
  }
  get typeofSearch(): string {
    return this._typeofSearch;
  }
  typeofAcc!: any;
  name!: any;
  today: any[] = [];
  filteredAppuntamenti!: Appuntamento[];
  set listFilter(value: string) {
    this._listFilter = value;

    this.filteredAppuntamenti = this.listFilter
      ? this.performFilter(this.listFilter, this.typeofSearch)
      : this.appuntamenti;
  }
  set typeofSearch(value: string) {
    this._typeofSearch = value;
  }
  constructor(public appuntamentoService: AppuntamentoService) {}

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem('isAdmin');
    this.name = localStorage.getItem('email');
    this.typeofAcc = localStorage.getItem('typeofAcc');

    if (this.isAdmin === 'false') {
      if (this.typeofAcc === 'patience') {
        this.filteredAppuntamenti = this.appuntamenti
          .filter((item: any) => item.email === this.name)
          .map((item: any) => {
            if (isToday(parseISO(item.date)) === true) {
              this.today.push(item);
              console.log(this.today);
              return null;
            } else {
              return item;
            }
          })
          .filter((item: any) => item != null);

        this.filteredAppuntamenti = this.performFilter(
          this.listFilter,
          this.typeofSearch
        );
      } else if (this.typeofAcc === 'doctor') {
        this.filteredAppuntamenti = this.appuntamenti
          .map((item: any) => {
            if (isToday(parseISO(item.date)) === true) {
              this.today.push(item);
              console.log(this.today);
              return null;
            } else {
              return item;
            }
          })
          .filter((item: any) => item != null);
        this.filteredAppuntamenti = this.performFilter(
          this.listFilter,
          this.typeofSearch
        );
      }
    } else {
      this.filteredAppuntamenti = this.appuntamenti
        .map((item: any) => {
          if (isToday(parseISO(item.date)) === true) {
            this.today.push(item);
            console.log(this.today);
            return null;
          } else {
            return item;
          }
        })
        .filter((item: any) => item != null);
      this.filteredAppuntamenti = this.performFilter(
        this.listFilter,
        this.typeofSearch
      );
    }
  }
  performFilter(filterBy: string, typeofSearch: string) {
    if (typeofSearch === 'name') {
      filterBy = filterBy.toLocaleLowerCase();
      return this.filteredAppuntamenti.filter(
        (product) => product.name.toLocaleLowerCase().indexOf(filterBy) !== -1
      );
    } else if (typeofSearch === 'email') {
      filterBy = filterBy.toLocaleLowerCase();
      return this.filteredAppuntamenti.filter(
        (product) => product.email.toLocaleLowerCase().indexOf(filterBy) !== -1
      );
    } else if (typeofSearch === 'doctorName') {
      filterBy = filterBy.toLocaleLowerCase();
      return this.filteredAppuntamenti.filter(
        (product) =>
          product.doctorName.toLocaleLowerCase().indexOf(filterBy) !== -1
      );
    } else if (typeofSearch === 'department') {
      filterBy = filterBy.toLocaleLowerCase();
      return this.filteredAppuntamenti.filter(
        (product) =>
          product.department.toLocaleLowerCase().indexOf(filterBy) !== -1
      );
    } else {
      return this.filteredAppuntamenti;
    }
  }

  getOrder(order: boolean, option: string) {
    switch (option) {
      case 'user':
        if (order === true) {
          this.filteredAppuntamenti.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
        } else {
          this.filteredAppuntamenti.sort((a, b) =>
            b.name.localeCompare(a.name)
          );
        }
        break;
      case 'email':
        if (order === true) {
          this.filteredAppuntamenti.sort((a, b) =>
            a.email.localeCompare(b.email)
          );
        } else {
          this.filteredAppuntamenti.sort((a, b) =>
            b.email.localeCompare(a.email)
          );
        }
        break;
      case 'fName':
        if (order === true) {
          this.filteredAppuntamenti.sort((a, b) =>
            a.firstName.localeCompare(b.firstName)
          );
        } else {
          this.filteredAppuntamenti.sort((a, b) =>
            b.firstName.localeCompare(a.firstName)
          );
        }
        break;
      case 'lName':
        if (order === true) {
          this.filteredAppuntamenti.sort((a, b) =>
            a.lastName.localeCompare(b.lastName)
          );
        } else {
          this.filteredAppuntamenti.sort((a, b) =>
            b.lastName.localeCompare(a.lastName)
          );
        }
        break;

      case 'createdAt':
        if (order === true) {
          this.filteredAppuntamenti.sort(
            (a, b) =>
              new Date(a.createdAt).setHours(0, 0, 0, 0) -
              new Date(b.createdAt).setHours(0, 0, 0, 0)
          );
        } else {
          this.filteredAppuntamenti.sort(
            (a, b) =>
              new Date(b.createdAt).setHours(0, 0, 0, 0) -
              new Date(a.createdAt).setHours(0, 0, 0, 0)
          );
        }
        break;
      case 'date':
        if (order === true) {
          this.filteredAppuntamenti.sort(
            (a, b) =>
              new Date(b.date).setHours(0, 0, 0, 0) -
              new Date(a.date).setHours(0, 0, 0, 0)
          );
        } else {
          this.filteredAppuntamenti.sort(
            (a, b) =>
              new Date(a.date).setHours(0, 0, 0, 0) -
              new Date(b.date).setHours(0, 0, 0, 0)
          );
        }
        break;

      case 'dName':
        if (order === true) {
          this.filteredAppuntamenti.sort((a, b) =>
            a.doctorName.localeCompare(b.doctorName)
          );
        } else {
          this.filteredAppuntamenti.sort((a, b) =>
            b.doctorName.localeCompare(a.doctorName)
          );
        }
        break;
      case 'department':
        if (order === true) {
          this.filteredAppuntamenti.sort((a, b) =>
            a.department.localeCompare(b.department)
          );
        } else {
          this.filteredAppuntamenti.sort((a, b) =>
            b.department.localeCompare(a.department)
          );
        }
        break;
      default:
        console.log(`Sorry, cannot find this type of sort.`);
    }
  }
  solveItem(item: any) {
    console.log(item.id);
  }
  deleteItem(item: any) {
    this.appuntamentoService.deleteAppointment(item.id);
  }
}
