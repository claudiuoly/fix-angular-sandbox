import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
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

  protected onLoginError(message: string): void {
    this.errorMessage.set(message || 'Login failed.');
  }
}
