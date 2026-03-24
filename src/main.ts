import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initFixCore } from 'fix-platform';
import 'fix-platform';
import { SERVER_URL } from './app/environment';

initFixCore({ baseUrl: SERVER_URL });

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
