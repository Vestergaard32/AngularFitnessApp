import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  public workoutName = new FormControl();

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

  onCreateWorkout(){
    if(this.workoutName != null){
      this.apiService.CreateWorkout(this.currentUser, this.workoutName.value);
    }
  }
}
