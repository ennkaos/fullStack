import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppuntamentoService } from '../appuntamento.service';
@Component({
  selector: 'app-create-appuntamento',
  templateUrl: './create-appuntamento.component.html',
  styleUrls: ['./create-appuntamento.component.css'],
})
export class CreateAppuntamentoComponent implements OnInit {
  filteredAcc: any;
  form: FormGroup;
  name!: string | null;
  isAdmin!: boolean;
  accType!: string | null;
  firstName!: string | null;
  lastName!: string | null;
  email!: string | null;
  isOpen: boolean = false;
  constructor(
    public fb: FormBuilder,
    public AppuntoService: AppuntamentoService
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    //doctors accounts
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
    this.form = this.fb.group({
      id: Math.random().toString(36).substr(2, 9),
      name: this.name,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      createdAt: new Date(),
      date: ['', [Validators.required]],
      solved: [false],
      doctorName: ['', [Validators.required]],

      department: ['', Validators.required],
      review: [''],
      totalCost: [''],
      paymentDone: [''],
      typeOfPayment: [''],
    });

    this.AppuntoService.getTypeofAcc('doctor').subscribe(
      (item) => (this.filteredAcc = item)
    );
    //get all the appointments
  }
  onSubmit() {
    if (this.form.valid) {
      this.AppuntoService.makeAppointment(this.form.value);
      console.log(this.form.value);
    } else {
      console.log('complete all form');
    }
  }
  openInfo() {
    this.isOpen = !this.isOpen;
  }
}
