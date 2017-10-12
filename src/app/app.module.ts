import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor'
import { LoginModule } from './login/login.module';
import { WorkoutModule } from './workout/workout.module';

import { AppComponent } from './app.component';

import { FitnessApiService } from './fitness-api.service'
import { LoginService } from './login/login.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    LoginModule,
    WorkoutModule
  ],
  providers: [
    FitnessApiService, 
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
