import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FitnessApiService } from '../../fitness-api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl();

  constructor(private apiService : FitnessApiService) 
  {
    console.log("POOP SHIZZLE");
    console.log(apiService);
  }

  ngOnInit() {
  }

  loginClick()
  {
    console.log("The pickle rick is: " + this.username.value);
    let pooper = this.apiService.Login(this.username.value)
      .then((theUser) => 
      {
        console.log(theUser);
      });
  }

}
