import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';

import { User } from './user'
import { Exercise } from './exercise'
import { WorkoutProgram } from './workout-program'
import { LoginService } from './login/login.service'

@Injectable()
export class FitnessApiService {
  public loggedInUser : BehaviorSubject<User>;

  private baseUrl = 'https://webassignment4.herokuapp.com/';

  constructor(private http: HttpClient, private loginService : LoginService)
  {
    this.loggedInUser = new BehaviorSubject<User>(null);
  }

  Login(username: string, password: string)
  {
    this.loginService.login(username, password).subscribe(data => {
      var user = new User();
      user._id = data["userid"];
      user.username = data["username"];
      user.workoutprograms = data["workoutprograms"];
      this.loggedInUser.next(user);
    });
  }

  CreateUser(username: string, password: string)
  {
    this.loginService.register(username, password).subscribe(data => {
      var user = new User();
      user._id = data["userid"];
      user.username = data["username"];
      this.loggedInUser.next(user);
    });
  }

  DeleteUser(user: User) : Promise<User>
  {
    let userUrl = this.baseUrl + 'api/users/' + user._id;
    return this.http.delete(userUrl)
      .toPromise()
      .catch(this.handleError);
  }

  CreateWorkout(user: User, workoutName:string) : Promise<User>
  {
    let userUrl = this.baseUrl + 'api/users/'+ user._id + '/workouts';
    const body = {workoutName : workoutName}
    return this.http.post(userUrl, body)
      .toPromise()
      .then((response) => 
        {
          var user = new User();
          user._id = response["userid"];
          user.username = response["username"];
          user.workoutprograms = response["workoutprograms"];
          this.loggedInUser.next(user);
        })
      .catch(this.handleError); 
  }

  DeleteWorkout(user : User, workoutId:string) : Promise<User>
  {
    let userUrl = this.baseUrl + 'api/users/' + user._id + '/workouts/' + workoutId;
    return this.http.delete(userUrl)
      .toPromise()
      .then((response) => {
        var user = new User();
        user._id = response["userid"];
        user.username = response["username"];
        user.workoutprograms = response["workoutprograms"];
        this.loggedInUser.next(user);
      })
      .catch(this.handleError);
  }

  CreateExercise(user : User, workoutId:string, exercise: Exercise) : Promise<User>
  {
    let userUrl = this.baseUrl + 'api/users/' + user._id + "/workouts/" + workoutId + "/exercises";
    const body = {
      exercisename: exercise.exerciseName,
      description: exercise.description,
      sets: exercise.sets,
      reps: exercise.reps
    };

    return this.http.post(userUrl, body)
      .toPromise()
      .then((response) => {
        var user = new User();
        user._id = response["userid"];
        user.username = response["username"];
        user.workoutprograms = response["workoutprograms"];
        this.loggedInUser.next(user);
      })
      .catch(this.handleError);
  }

  DeleteExercise(user : User, workoutId:string, exerciseId: string) : Promise<User>
  {
    let userUrl = this.baseUrl + 'api/users/' + user._id + "/workouts/" + workoutId + "/exercises/" + exerciseId;
    return this.http.delete(userUrl)
      .toPromise()
      .then((response) => {
        var user = new User();
        user._id = response["userid"];
        user.username = response["username"];
        user.workoutprograms = response["workoutprograms"];
        this.loggedInUser.next(user);
      })
      .catch(this.handleError);
  }

  CreateWorkoutActivity(user : User, workoutId: string) : Promise<User>
  {
    let userUrl = this.baseUrl + 'api/users/' + user._id + "/workouts/" + workoutId + "/workoutActivities";
    return this.http.post(userUrl, {})
      .toPromise()
      .then((response) => {
        var user = new User();
        user._id = response["userid"];
        user.username = response["username"];
        user.workoutprograms = response["workoutprograms"];
        this.loggedInUser.next(user);
      })
      .catch(this.handleError);
  }

  GetAllworkouts() : Promise<Object>
  {
    let url = this.baseUrl + "api/workouts";

    return this.http.get(url, {})
      .toPromise();
  }

  Logout()
  {
    this.loggedInUser.next(null);
    this.loginService.logout();
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }
}
