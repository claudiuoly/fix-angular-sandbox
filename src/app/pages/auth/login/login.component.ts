import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private readonly router = inject(Router);

  protected readonly errorMessage = signal('');

  protected onLoginSuccess(): void {
    this.errorMessage.set('');
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
