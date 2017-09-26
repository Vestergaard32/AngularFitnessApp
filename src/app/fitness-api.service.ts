import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './user'

@Injectable()
export class FitnessApiService {
  public loggedInUser : User;

  private baseUrl = 'https://hidden-lake-64342.herokuapp.com/';

  constructor(private http: Http)
  {

  }

  Login(username: string): Promise<User>
  {
    let userUrl = this.baseUrl + 'api/users/' + username;

    return this.http.get(userUrl)
      .toPromise()
      .then((response) =>
        {
           this.loggedInUser = response.json().User as User;
        }
      )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }
}
