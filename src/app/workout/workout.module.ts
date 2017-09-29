import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutEntryComponent } from './workout-entry/workout-entry.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [WorkoutComponent, WorkoutEntryComponent],
  exports: [
    WorkoutComponent,
    WorkoutEntryComponent
  ]
})
export class WorkoutModule { }
