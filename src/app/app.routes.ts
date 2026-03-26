import { inject } from '@angular/core';
import { LoginCustomComponent } from './pages/auth/login-custom/login-custom.component';
import { LoginFormOnlyComponent } from './pages/auth/login-form-only/login-form-only.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { PartnersComponent } from './pages/partners-pages/partners/partners.component';
import { CanActivateFn, Router, Routes } from '@angular/router';

const isAuthenticated = () =>
  typeof window !== 'undefined' && sessionStorage.getItem('fix-sandbox-authenticated') === '1';

const partnersGuard: CanActivateFn = () =>
  isAuthenticated() ? true : inject(Router).createUrlTree(['/login']);

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
  {
    path: 'partners',
    component: PartnersComponent,
    canActivate: [partnersGuard],
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },
];