import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';

import { FitnessApiService } from './fitness-api.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule
  ],
  providers: [FitnessApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
