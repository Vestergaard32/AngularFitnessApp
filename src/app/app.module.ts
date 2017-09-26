import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { WorkoutModule } from './workout/workout.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FitnessApiService } from './fitness-api.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoginModule,
    WorkoutModule
  ],
  providers: [FitnessApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
