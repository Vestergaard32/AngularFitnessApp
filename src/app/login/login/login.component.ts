import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FitnessApiService } from '../../fitness-api.service'
import { LoginService } from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  username = new FormControl();
  password = new FormControl();

  newusername = new FormControl();
  newpassword = new FormControl();

  constructor(private apiService : FitnessApiService,
              private loginService : LoginService) 
  {
    console.log("This comes from LoginComponent!");
  }

  ngOnInit() {
  }

  loginClick()
  {
    this.apiService.Login(this.username.value, this.password.value);
  }

  logoutClick()
  {
    this.apiService.Logout();
  }

  onCreateUserClick()
  {
    this.apiService.CreateUser(this.newusername.value, this.newpassword.value);
  }

  checkWorkouts()
  {
    
  }

  ngOnDestroy()
  {
    this.apiService.loggedInUser.unsubscribe();
  }
}
