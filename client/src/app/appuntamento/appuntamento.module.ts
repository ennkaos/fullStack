import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppuntamentoRoutingModule } from './appuntamento-routing.module';
import { AppuntamentoComponent } from './appuntamento.component';
import { DateFnsModule } from 'ngx-date-fns';
import { HttpClientModule } from '@angular/common/http';
import { ListAppuntamentoComponent } from './list-appuntamento/list-appuntamento.component';
import { CreateAppuntamentoComponent } from './create-appuntamento/create-appuntamento.component';
import { HistoryComponent } from './history/history.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppuntamentoComponent,
    ListAppuntamentoComponent,
    CreateAppuntamentoComponent,
    HistoryComponent,
  ],
  imports: [
    CommonModule,
    AppuntamentoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DateFnsModule,
  ],
})
export class AppuntamentoModule {}
