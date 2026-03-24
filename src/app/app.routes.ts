import { LoginCustomComponent } from './pages/auth/login-custom/login-custom.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login-custom',
    component: LoginCustomComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },
];