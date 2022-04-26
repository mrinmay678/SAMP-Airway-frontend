import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
  }

  userLoggedIn = false;

  constructor(public authService: AuthService) {
      if(localStorage.getItem('access-token') != null){
        this.userLoggedIn = true;
      }

  }

  login(data:any):void{
  
    this.authService.login(data).subscribe(
      (res) => {
        this.userLoggedIn = true;
        localStorage.setItem('access-token', res.data.access_token);
      },
      (err) => {
        if(err.error.error == "INVALID_CREDENTIALS") {
          alert("Bad Credentials");
        }
        else {
          alert("Something went wrong");
          console.log(err);
        }
      });
  }

  signup(data:any) :void{
    if(data.password == data.confirm_password){
      this.authService.signup(data).subscribe(res => {
        this.userLoggedIn = true;
        localStorage.setItem('access-token', res.data.access_token);
      });
    }
    else{
      alert("Password and Confirm Password does not match");
    }
  }

  profile():void{
    
  }

  logout():void{
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    this.userLoggedIn = false;
  }

}
