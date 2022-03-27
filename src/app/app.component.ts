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
  constructor(private router:Router){}

  goToPage(pageName:any) :void
  {
    this.router.navigate([`${pageName}`]);
  }

}
