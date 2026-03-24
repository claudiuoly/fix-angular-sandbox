import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LoginCustomComponent } from './pages/auth/login-custom/login-custom.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthDemoNavComponent } from './shared/auth-demo-nav/auth-demo-nav.component';

@NgModule({
	declarations: [
    AppComponent,
    AuthDemoNavComponent,
    LoginComponent,
    LoginCustomComponent
  ],
	imports: [BrowserModule, RouterModule.forRoot(routes)],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
