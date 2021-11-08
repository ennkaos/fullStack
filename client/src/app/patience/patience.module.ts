import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatienceRoutingModule } from './patience-routing.module';
import { PatienceComponent } from './patience.component';
import { AddPatienceComponent } from './add-patience/add-patience.component';
import { DetailsPacienteComponent } from './details-paciente/details-paciente.component';

@NgModule({
  declarations: [PatienceComponent, AddPatienceComponent, DetailsPacienteComponent],
  imports: [CommonModule, PatienceRoutingModule],
})
export class PatienceModule {}
