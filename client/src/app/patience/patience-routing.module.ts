import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatienceComponent } from './add-patience/add-patience.component';
import { PatienceComponent } from './patience.component';

const routes: Routes = [
  { path: '', component: PatienceComponent },
  { path: 'add-patience', component: AddPatienceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatienceRoutingModule {}
