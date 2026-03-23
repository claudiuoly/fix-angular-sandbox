import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AuthStateService, type AuthUser } from './auth-state.service';

interface LoginSuccessPayload {
  token: string;
  user: AuthUser;
}

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="demo-nav">
      <strong>Default login</strong>
      <span> | </span>
      <a routerLink="/login-custom">Custom login</a>
    </div>

    <div class="login-shell">
      <div class="login-container">
        <fix-login-page
          (login-success)="onLoginSuccess($event)"
          (login-error)="onLoginError($event)"
        ></fix-login-page>

        @if (errorMessage()) {
          <p class="error-message" role="alert">{{ errorMessage() }}</p>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .demo-nav {
        position: fixed;
        top: 16px;
        right: 16px;
        z-index: 10;
        border-radius: 9999px;
        background: rgb(15 23 42 / 90%);
        color: #f8fafc;
        padding: 8px 12px;
        font-size: 14px;
      }

      .demo-nav a {
        color: #93c5fd;
      }

      .login-shell {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      }

      .login-container {
        position: relative;
        width: 100%;
        min-height: 100vh;
      }
    `,
  ],
})
export class LoginComponent {
  private readonly router = inject(Router);
  private readonly authState = inject(AuthStateService);

  protected readonly errorMessage = signal('');

  protected onLoginSuccess(event: Event): void {
    const customEvent = event as CustomEvent<LoginSuccessPayload>;
    const payload = customEvent.detail;

    if (!payload?.token || !payload?.user) {
      this.errorMessage.set('Login response is invalid.');
      return;
    }

    this.errorMessage.set('');
    this.authState.setAuth(payload.token, payload.user);
    void this.router.navigate(['/partners']);
  }

  protected onLoginError(event: Event): void {
    const customEvent = event as CustomEvent<string>;
    const message = customEvent.detail || 'Login failed.';
    this.errorMessage.set(message);
  }
}
