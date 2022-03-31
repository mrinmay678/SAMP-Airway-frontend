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
    try{
      this.authService.login(data).subscribe(res => {
        this.userLoggedIn = true;
        localStorage.setItem('access-token', res.data.access_token);
        localStorage.setItem('refresh-token', res.data.refresh_token);
      });
    }
    catch(e:any){
      if(e.message == "Access Token Expired"){
        this.authService.refreshToken({ refresh_token : localStorage.getItem("refresh-token")}).subscribe(res => {
          this.userLoggedIn = true;
          localStorage.setItem('access-token', res.data.access_token);
        })
      }
      else if(e.message == "Wrong Password") {
        alert("Wrong Password");
      }
      else if(e.message == "User Not Found") {
        alert("User Not Found");
      }
      else {
        alert("Something went wrong");
        console.log(e);
      }
    }
  }

  signup(data:any) :void{
    if(data.password == data.confirm_password){
      this.authService.signup(data).subscribe(res => {
        this.userLoggedIn = true;
        localStorage.setItem('access-token', res.data.access_token);
        localStorage.setItem('refresh-token', res.data.refresh_token);
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
