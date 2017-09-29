import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';

import { User } from './user'
import { Exercise } from './exercise'

@Injectable()
export class FitnessApiService {
  public loggedInUser : BehaviorSubject<User>;

  private baseUrl = 'https://hidden-lake-64342.herokuapp.com/';

  constructor(private http: Http)
  {
    this.loggedInUser = new BehaviorSubject<User>(null);
  }

  Login(username: string): Promise<User>
  {
    let userUrl = this.baseUrl + 'api/users/' + username;

    return this.http.get(userUrl)
      .toPromise()
      .then((response) =>
        {
          this.loggedInUser.next(response.json().User as User);
        })
      .catch(this.handleError);
  }

  CreateUser(username: string) : Promise<User>
  {
    let userUrl = this.baseUrl + 'api/users';
    const body = {"username" : username};
    return this.http.post(userUrl, body)  
      .toPromise()
      .then((response) =>
        {
          console.log(response.json().User as User);
          this.loggedInUser.next(response.json().User as User);
        })
      .catch(this.handleError)
  }

  DeleteUser(user: User) : Promise<User>
  {
    let userUrl = this.baseUrl + 'api/users/' + user._id;
    return this.http.delete(userUrl)
      .toPromise()
      .catch(this.handleError);
  }

  CreateWorkout(user:User, workoutName:string) : Promise<User>
  {
    let userUrl = this.baseUrl + 'api/users/'+ user._id + '/workouts';
    const body = {workoutName : workoutName}
    return this.http.post(userUrl, body)
      .toPromise()
      .then((response) => 
        {
          this.loggedInUser.next(response.json().User as User);
        })
      .catch(this.handleError); 
  }

  DeleteWorkout(user : User, workoutId:string) : Promise<User>
  {
    let userUrl = this.baseUrl + 'api/users/' + user._id + '/workouts/' + workoutId;
    return this.http.delete(userUrl)
      .toPromise()
      .then((response) => this.loggedInUser.next(response.json().User as User))
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
      .then((response) => this.loggedInUser.next(response.json().User as User))
      .catch(this.handleError);
  }

  DeleteExercise(user : User, workoutId:string, exerciseId: string) : Promise<User>
  {
    let userUrl = this.baseUrl + 'api/users/' + user._id + "/workouts/" + workoutId + "/exercises/" + exerciseId;
    return this.http.delete(userUrl)
      .toPromise()
      .then((response) => this.loggedInUser.next(response.json().User as User))
      .catch(this.handleError);
  }

  CreateWorkoutActivity(user : User, workoutId: string) : Promise<User>
  {
    let userUrl = this.baseUrl + 'api/users/' + user._id + "/workouts/" + workoutId + "/workoutActivities";
    return this.http.post(userUrl, {})
      .toPromise()
      .then((response) => this.loggedInUser.next(response.json().updatedUser as User))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }
}
