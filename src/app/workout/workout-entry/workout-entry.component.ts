import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FitnessApiService } from '../../fitness-api.service'
import { User } from '../../user'
import { WorkoutProgram } from '../../workout-program'
import { Exercise } from '../../exercise'

@Component({
  selector: 'app-workout-entry',
  templateUrl: './workout-entry.component.html',
  styleUrls: ['./workout-entry.component.css']
})
export class WorkoutEntryComponent implements OnInit {
  @Input() workout : WorkoutProgram;

  public currentUser : User;
  exerciseName = new FormControl();
  exerciseDescription = new FormControl();
  exerciseSets = new FormControl();
  exerciseReps = new FormControl();

    constructor(private apiService : FitnessApiService) 
    {
      this.apiService.loggedInUser.subscribe(user => this.refreshUser(user));
    }
  
    ngOnInit() {
    }
  
    refreshUser(user : User)
    {
      this.currentUser = user;
    }
  
    onDeleteWorkout(workoutId : string)
    {
      this.apiService.DeleteWorkout(this.currentUser, workoutId);
    }
  
    onDeleteExercise(workoutId : string, exerciseId : string)
    {
      this.apiService.DeleteExercise(this.currentUser, workoutId, exerciseId);
    }

    onCreateExercise(workoutId : string)
    {
      let newExercise = new Exercise();
      newExercise.description = this.exerciseDescription.value;
      newExercise.exerciseName = this.exerciseName.value;
      newExercise.reps = this.exerciseReps.value;
      newExercise.sets = this.exerciseSets.value;

      console.log(newExercise);

      this.apiService.CreateExercise(this.currentUser, workoutId, newExercise);
    }
  
    onLogWorkoutActivity(workoutId : string)
    {
      this.apiService.CreateWorkoutActivity(this.currentUser, workoutId);
    }
}
