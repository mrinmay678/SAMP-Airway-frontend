import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  headers=["Flight name   ","Source   ","Destination   ","Time of Departure   ","Cost   "];
  rows=[
    {"Flight name":'SpiceJet',"Source":'Kolkata',"Destination":'Delhi',"Time of Departure":'11:00',"Cost":'Rs 3999'},
    {"Flight name":'Air India',"Source":'Kolkata',"Destination":'Mumbai',"Time of Departure":'13:00',"Cost":'Rs 4399'},
    {"Flight name":'Indigo',"Source":'Kolkata',"Destination":'Hyderabad',"Time of Departure":'09:00',"Cost":'Rs 2799'},
    {"Flight name":'Air Asia',"Source":'Kolkata',"Destination":'Bangalore',"Time of Departure":'16:00',"Cost":'Rs 4999'},
    {"Flight name":'Vistara',"Source":'Kolkata',"Destination":'Delhi',"Time of Departure":'10:00',"Cost":'Rs 5399'}
  ]

  constructor(private router:Router){}

  goToPage(pageName:any) :void
  {
    this.router.navigate([`${pageName}`]);
  }
}
