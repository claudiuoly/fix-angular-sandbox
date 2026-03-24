import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-demo-nav',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './auth-demo-nav.component.html',
  styleUrls: ['./auth-demo-nav.component.scss'],
})
export class AuthDemoNavComponent {}
