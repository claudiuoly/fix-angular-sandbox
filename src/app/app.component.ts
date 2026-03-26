import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  private readonly router = inject(Router);

  protected showAuthDemoNav = true;

  ngAfterViewInit(): void {
    this.updateNavVisibility(this.router.url);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => this.updateNavVisibility((event as NavigationEnd).urlAfterRedirects));
  }

  private updateNavVisibility(url: string): void {
    this.showAuthDemoNav = !url.startsWith('/partners');
  }
}
