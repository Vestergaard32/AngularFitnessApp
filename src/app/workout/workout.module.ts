import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutEntryComponent } from './workout-entry/workout-entry.component';
import { AllworkoutsComponent } from './allworkouts/allworkouts.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [WorkoutComponent, WorkoutEntryComponent, AllworkoutsComponent],
  exports: [
    WorkoutComponent,
    WorkoutEntryComponent,
    AllworkoutsComponent
  ]
})
export class WorkoutModule { }