import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  ngOnInit(): void {
  }

  headers=["Flight name   ","Source   ","Destination   ","Time of Departure   ","Cost   "];
  rows=[
    {"flight_name":'SpiceJet',"source":'Kolkata',"destination":'Delhi',"time_of_departure":'11:00',"cost":'Rs 3999'},
    {"flight_name":'Air India',"source":'Kolkata',"destination":'Mumbai',"time_of_departure":'13:00',"cost":'Rs 4399'},
    {"flight_name":'Indigo',"source":'Kolkata',"destination":'Hyderabad',"time_of_departure":'09:00',"cost":'Rs 2799'},
    {"flight_name":'Air Asia',"source":'Kolkata',"destination":'Bangalore',"time_of_departure":'16:00',"cost":'Rs 4999'},
    {"flight_name":'Vistara',"source":'Kolkata',"destination":'Delhi',"time_of_departure":'10:00',"cost":'Rs 5399'}
  ]

}
