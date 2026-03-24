import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-custom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './login-custom.component.html',
  styleUrls: ['./login-custom.component.scss'],
})
export class LoginCustomComponent {
  private readonly router = inject(Router);

  protected readonly errorMessage = signal('');

  protected onLoginSuccess(): void {
    this.errorMessage.set('');
    void this.router.navigate(['/partners']);
  }

  protected onLoginError(message: string): void {
    this.errorMessage.set(message || 'Login failed.');
  }

  protected onSupportRequested(): void {
    console.log('[fix-login-page] login-support handled by consumer');
  }
}
