import { LoginCustomComponent } from './pages/auth/login-custom/login-custom.component';
import { LoginFormOnlyComponent } from './pages/auth/login-form-only/login-form-only.component';
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
  {
    path: 'login-form-only',
    component: LoginFormOnlyComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },
];