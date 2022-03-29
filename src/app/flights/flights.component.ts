import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FlightsService } from './flights.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  public flightId:any;
  constructor(public flightService: FlightsService, private route: ActivatedRoute, private router: Router) { }
  flight_name="";
  departure = "";
  arrival="";
  source="";
  dest="";
  adult:number = 0;
  child:number = 0;
  fare:number = 0;
  passengers: FormArray = new FormArray([]);
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.flightId = id;
    });
    this.flightService.getFlightDetail(this.flightId).subscribe(res => {
      this.flight_name = res.data.flight_name;
      this.departure = res.data.departure;
      this.arrival = res.data.arrival;
      this.source = res.data.source;
      this.dest = res.data.destination;
      this.adult = res.data.adult;
      this.child = res.data.child;
      this.fare = res.data.price;
    });
  }

  confirmBooking() :void {
     
    // this.flightService.bookTicket(data).subscribe(res => {
      
    // });
    confirm("Do you want to book the tickets?");
  }

  onAddPassenger() :void {
    this.passengers.push({
      
    });

}
