import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'frontend';
  userLoggedIn = false;

  login(data:any):void{
    console.log(data);
  }

  signup(data:any) :void{
    console.log(data);
  }
}
