import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'doctors',
    loadChildren: () =>
      import('./doctors/doctors.module').then((m) => m.DoctorsModule),
  },
  {
    path: 'appuntamento',
    loadChildren: () =>
      import('./appuntamento/appuntamento.module').then(
        (m) => m.AppuntamentoModule
      ),
  },
  {
    path: 'patience',
    loadChildren: () =>
      import('./patience/patience.module').then((m) => m.PatienceModule),
  },
  {
    path: 'admin-login',
    loadChildren: () =>
      import('./admin-login/admin-login.module').then(
        (m) => m.AdminLoginModule
      ),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },

  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
