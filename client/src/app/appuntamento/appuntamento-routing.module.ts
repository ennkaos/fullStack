import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppuntamentoComponent } from './appuntamento.component';

const routes: Routes = [{ path: '', component: AppuntamentoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppuntamentoRoutingModule {}
