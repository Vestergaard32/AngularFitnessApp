import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutComponent } from './workout/workout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorkoutComponent],
  exports: [
    WorkoutComponent
  ]
})
export class WorkoutModule { }
