import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { SERVER_URL } from './environments/environment';
import { initFixCore } from 'fix-platform';
import 'fix-platform';

initFixCore({ baseUrl: SERVER_URL });

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
