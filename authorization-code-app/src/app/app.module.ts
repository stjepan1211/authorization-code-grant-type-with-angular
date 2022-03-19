import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserdataComponent } from './userdata/userdata.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'oauth/callback', component: LoginComponent },
      { path: 'user', component: UserdataComponent },
      { path: '', component: HomeComponent },
      { path: '**', component: HomeComponent }
    ]),
    AuthModule.forRoot({
      config: {
        authority: 'https://agogos-dev.atgrzck4022.atgrz.onprem.avl.zone/identity',
        redirectUrl: 'http:localhost:1950/auth/callback',
        postLogoutRedirectUri: 'http:localhost:1950',
        clientId: 'smc-e-scooter-faser',
        responseType: 'code',
        scope: 'openid profile email',
        autoUserInfo: true,
        maxIdTokenIatOffsetAllowedInSeconds: 300,
        disableIatOffsetValidation: false,
        autoCleanStateAfterAuthentication: true,
        triggerAuthorizationResultEvent: false,
        startCheckSession: false,
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
