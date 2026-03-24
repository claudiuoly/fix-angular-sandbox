import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { initFixCore } from 'fix-platform';
import 'fix-platform';
import { SERVER_URL } from './app/environment';

initFixCore({ baseUrl: SERVER_URL });

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err: unknown) => console.error(err));
