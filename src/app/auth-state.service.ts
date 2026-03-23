import { Injectable, signal } from '@angular/core';

export interface AuthUser {
  organizationId?: string;
  [key: string]: unknown;
}

@Injectable({ providedIn: 'root' })
export class AuthStateService {
  readonly token = signal<string | null>(null);
  readonly user = signal<AuthUser | null>(null);

  setAuth(token: string, user: AuthUser): void {
    this.token.set(token);
    this.user.set(user);
  }
}
