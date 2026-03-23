import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginCustomComponent } from './login-custom.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login-custom', component: LoginCustomComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' }
];
