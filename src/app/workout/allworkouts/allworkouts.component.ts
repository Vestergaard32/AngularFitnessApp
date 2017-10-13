import { Component, OnInit } from '@angular/core';

import { FitnessApiService } from '../../fitness-api.service'
import { WorkoutProgram } from '../../workout-program'
import { User } from '../../user'

@Component({
  selector: 'app-allworkouts',
  templateUrl: './allworkouts.component.html',
  styleUrls: ['./allworkouts.component.css']
})
export class AllworkoutsComponent implements OnInit {

  public workouts : WorkoutProgram[];

  public shouldShwo : boolean;

  constructor(private apiService : FitnessApiService) { 
    this.apiService.loggedInUser.subscribe(user => this.refreshUser(user));
  }

  ngOnInit() {
  }

  checkWorkouts() {
    this.apiService.GetAllworkouts()
      .then((response) => {
        this.workouts = response as WorkoutProgram[];
        console.log(this.workouts);
      });
  }

  refreshUser(user : User) {
    this.workouts = null;
    if (user != null)
    {
      this.shouldShwo = false;
    } else
      this.shouldShwo = true;
  }

}
