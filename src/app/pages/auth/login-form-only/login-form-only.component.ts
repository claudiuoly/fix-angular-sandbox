import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form-only',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-form-only.component.html',
  styleUrls: ['./login-form-only.component.scss'],
})
export class LoginFormOnlyComponent {
  private readonly router = inject(Router);

  protected readonly errorMessage = signal('');

  protected onLoginSuccess(): void {
    this.errorMessage.set('');
    sessionStorage.setItem('fix-sandbox-authenticated', '1');
    void this.router.navigate(['/partners']);
  }

  protected onLoginError(eventOrMessage: Event | string): void {
    const message =
      typeof eventOrMessage === 'string'
        ? eventOrMessage
        : eventOrMessage instanceof CustomEvent
          ? String(eventOrMessage.detail ?? '')
          : '';

    this.errorMessage.set(message || 'Login failed.');
  }
}
