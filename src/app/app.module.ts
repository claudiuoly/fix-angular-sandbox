import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LoginCustomComponent } from './pages/auth/login-custom/login-custom.component';
import { LoginFormOnlyComponent } from './pages/auth/login-form-only/login-form-only.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { PartnersComponent } from './pages/partners-pages/partners/partners.component';
import { AuthDemoNavComponent } from './shared/auth-demo-nav/auth-demo-nav.component';
import { PostLoginHeaderComponent } from './shared/post-login-header/post-login-header.component';

@NgModule({
	declarations: [
    AppComponent,
    AuthDemoNavComponent,
    LoginComponent,
    LoginCustomComponent,
    LoginFormOnlyComponent,
    PartnersComponent,
    PostLoginHeaderComponent,
  ],
	imports: [BrowserModule, RouterModule.forRoot(routes)],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
