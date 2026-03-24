import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-auth-demo-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './auth-demo-nav.component.html',
  styleUrls: ['./auth-demo-nav.component.scss'],
})
export class AuthDemoNavComponent {}
