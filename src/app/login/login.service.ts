import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Response, Headers, Http } from '@angular/http';

import { User } from '../user'

@Injectable()
export class LoginService {
  fitnessTokenKey: string;
  baseUrl: string;

  constructor(private http: Http) 
  {
    this.fitnessTokenKey = "fitness-token";
    this.baseUrl = "http://localhost:3000/api/"
  }

  private saveToken(token: string)
  {
    window.localStorage[this.fitnessTokenKey] = token;
  }

  public getToken()
  {
    if (window.localStorage[this.fitnessTokenKey]) 
    {
      console.log("FROM TOKEN STUFF");
      console.log(window.localStorage[this.fitnessTokenKey]);
      return window.localStorage[this.fitnessTokenKey];
    } else
    {
      return '';
    }
  }

  public register(username: string, password: string) : Observable<Response>
  {
    const url = this.baseUrl + "users";
    var theObservable = this.http.post(url, {
      "username": username,
      "password": password
    });

    theObservable.subscribe(data => {
      console.log(data.json().token);
      this.saveToken(data.json().token);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // Client-Side or network error occurred
        console.log("An error occurred:", err.error.message);
      } else {
        // The backend returned an unsuccessful response code
        console.log("Backend error occurred:", err.error);
      }
    });

    return theObservable;
  }

  public login(username: string, password: string) : Observable<Response>
  {
    const url = this.baseUrl + "users/login";

    var theObservable = this.http.post(url, {
      "username": username,
      "password": password
    });

    theObservable.subscribe(data => {
      console.log(data.json().token);
      this.saveToken(data.json().token);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // Client-Side or network error occurred
        console.log("An error occurred:", err.error.message);
      } else {
        // The backend returned an unsuccessful response code
        console.log("Backend error occurred:", err.error);
      }
    });

    return theObservable;
  }

  public isLoggedIn()
  {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(window.atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  /*
  public currentUser() : User {
    if (this.isLoggedIn()) {
      const token = this.getToken();
      const payload = JSON.parse(window.atob(token.split('.')[1]));

    }
  }*/
}
