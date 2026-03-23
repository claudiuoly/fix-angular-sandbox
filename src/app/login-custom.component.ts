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
  selector: 'app-login-custom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="demo-nav">
      <a routerLink="/login">Default login</a>
      <span> | </span>
      <strong>Custom login</strong>
    </div>

    <div class="login-shell">
      <div class="login-container">
        <fix-login-page
          (login-success)="onLoginSuccess($event)"
          (login-error)="onLoginError($event)"
          (login-support)="onSupportRequested($event)"
        >
          <div slot="header" class="custom-header">
            <div style="display: flex; align-items: center; gap: 8px; color:rgb(10, 49, 222);">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                />
                <path d="M2 12h20" />
              </svg>
              <h1 style="font-size: 24px; font-weight: bold; margin: 0;">Zexsoft Custom UI</h1>
            </div>
          </div>

          <img
            slot="hero"
            class="custom-hero"
            src="https://picsum.photos/seed/zexsoft-login/1200/1600"
            alt="Zexsoft Custom Login"
          />

          <div slot="footer" class="custom-footer flex flex-col gap-1 items-start text-sm text-muted-foreground">
            <svg
              width="180"
              height="30"
              viewBox="0 0 180 30"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="opacity-50 text-emerald-500 mb-2"
            >
              <circle cx="15" cy="15" r="10" />
              <path
                d="M15 5a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              />
              <path d="M5 15h20" />
              <text
                x="35"
                y="20"
                font-size="16"
                stroke="none"
                fill="currentColor"
                font-weight="bold"
              >
                Zexsoft Custom UI
              </text>
            </svg>
            <div style="opacity: 0.7; font-size: 14px; display: flex; align-items: center;">
              &copy; 2026 &nbsp;<strong>Zexsoft Custom UI</strong>
            </div>
          </div>
        </fix-login-page>

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
        display: block;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      }

      .login-container {
        width: 100%;
        height: 100%;
      }

      .custom-hero {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `,
  ],
})
export class LoginCustomComponent {
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

  protected onSupportRequested(event: Event): void {
    event.preventDefault(); // suppress the default mailto: fallback in the web component
    // custom support handling — show modal, navigate, open ticket form, etc.
    console.log('[fix-login-page] login-support handled by consumer');
  }
}
