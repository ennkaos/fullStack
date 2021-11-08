import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { LoginGuardGuard } from './auth/login-guard.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name!: string | null;
  isUserLoggedIn!: boolean;

  constructor(
    public authGuard: LoginGuardGuard,
    private dataSharingService: AppServiceService
  ) {}
}
