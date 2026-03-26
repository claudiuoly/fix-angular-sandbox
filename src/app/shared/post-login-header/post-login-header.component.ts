import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-login-header',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post-login-header.component.html',
  styleUrls: ['./post-login-header.component.scss'],
})
export class PostLoginHeaderComponent {
  private readonly router = inject(Router);

  protected logout(): void {
    sessionStorage.removeItem('fix-sandbox-authenticated');
    void this.router.navigate(['/login']);
  }
}
