import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditPageComponent } from './editPage';
import { ApiService, } from './api.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard, AuthService, AuthInterceptor } from './auth.service';
import { ListComponent } from './list.component';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    SignupComponent,
    EditPageComponent,
    PortfolioPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
