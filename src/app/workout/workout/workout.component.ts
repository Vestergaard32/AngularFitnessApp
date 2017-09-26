import { Component, OnInit } from '@angular/core';

import { FitnessApiService } from '../../fitness-api.service'
import { User } from '../../user'
import { WorkoutProgram } from '../../workout-program'

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  public currentUser : User;

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
}
