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
  selector: 'app-login',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  private readonly router = inject(Router);

  @ViewChild('loginPage') private readonly loginPage!: ElementRef<HTMLElement>;

  protected readonly errorMessage = signal('');

  ngAfterViewInit(): void {
    // Angular blocks [onX] bindings for security — set prop directly on the element.
    // Remove the line below to hide the support link.
    (this.loginPage.nativeElement as any)['onSupportRequested'] = () => {
      console.log('[fix-login-page] login-support handled by consumer');
    };
  }

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
