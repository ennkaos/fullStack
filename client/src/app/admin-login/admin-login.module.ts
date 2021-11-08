import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginRoutingModule } from './admin-login-routing.module';
import { AdminLoginComponent } from './admin-login.component';

@NgModule({
  declarations: [AdminLoginComponent],
  imports: [CommonModule, AdminLoginRoutingModule, ReactiveFormsModule],
})
export class AdminLoginModule {}
