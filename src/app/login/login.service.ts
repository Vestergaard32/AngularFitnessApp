import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

import { User } from '../user'

@Injectable()
export class LoginService {
  fitnessTokenKey: string;
  baseUrl: string;

  constructor(private http: HttpClient) 
  {
    this.fitnessTokenKey = "fitness-token";
    this.baseUrl = "https://webassignment4.herokuapp.com/api/"
  }

  private saveToken(token: string)
  {
    window.localStorage[this.fitnessTokenKey] = token;
  }

  public getToken()
  {
    if (window.localStorage[this.fitnessTokenKey]) 
    {
      return window.localStorage[this.fitnessTokenKey];
    } else
    {
      return '';
    }
  }

  public register(username: string, password: string) : Observable<Object>
  {
    const url = this.baseUrl + "users";
    var theObservable = this.http.post(url, {
      "username": username,
      "password": password
    }).share();

    theObservable.subscribe(data => {
      this.saveToken(data["token"]);
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

  public login(username: string, password: string) : Observable<Object>
  {
    const url = this.baseUrl + "users/login";

    var theObservable = this.http.post(url, {
      "username": username,
      "password": password
    }).share();

    theObservable.subscribe(data => {
      this.saveToken(data["token"]);
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

  public logout()
  {
    window.localStorage.removeItem(this.fitnessTokenKey);
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
}
