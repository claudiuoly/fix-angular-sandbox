import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-custom',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-custom.component.html',
  styleUrls: ['./login-custom.component.scss'],
})
export class LoginCustomComponent implements AfterViewInit {
  private readonly router = inject(Router);

  @ViewChild('loginPage') private readonly loginPage!: ElementRef<HTMLElement>;

  protected readonly errorMessage = signal('');

  ngAfterViewInit(): void {
    // Angular blocks [onX] property bindings for security, so we set the prop directly.
    // Remove the assignment below to hide the support link in the login form.
    (this.loginPage.nativeElement as any)['onSupportRequested'] = () => {
      console.log('[fix-login-page] login-support handled by consumer');
    };
  }

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
