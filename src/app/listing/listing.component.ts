import { Component, OnInit } from '@angular/core';
import { ListingService } from './listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  locations = new Array<any>();

  constructor(public listingService: ListingService) { }
  ngOnInit(): void {
    this.listingService.getLocations().subscribe(res => {
      console.log(res);
      this.locations = res.data.locations;
    });
  }

  today = new Date();

  dd:any = String(this.today.getDate()).padStart(2, '0');
  mm:any = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy:any = this.today.getFullYear();

  today_date = this.dd + '/' + this.mm + '/' + this.yyyy;

  getFlight(data:any){
    console.log(data.source);
  }

  headers=["Flight name   ","Source   ","Destination   ","Time of Departure   ","Cost   "];
  rows=[
    {"flight_name":'SpiceJet',"source":'Kolkata',"destination":'Delhi',"time_of_departure":'11:00',"cost":'Rs 3999'},
    {"flight_name":'Air India',"source":'Kolkata',"destination":'Mumbai',"time_of_departure":'13:00',"cost":'Rs 4399'},
    {"flight_name":'Indigo',"source":'Kolkata',"destination":'Hyderabad',"time_of_departure":'09:00',"cost":'Rs 2799'},
    {"flight_name":'Air Asia',"source":'Kolkata',"destination":'Bangalore',"time_of_departure":'16:00',"cost":'Rs 4999'},
    {"flight_name":'Vistara',"source":'Kolkata',"destination":'Delhi',"time_of_departure":'10:00',"cost":'Rs 5399'}
  ];
  
  
}
