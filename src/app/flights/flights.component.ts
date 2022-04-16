import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FlightsService } from './flights.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  public flightId:any;
  constructor(public flightService: FlightsService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }
  flight_name="";
  departure = "";
  arrival="";
  source="";
  dest="";
  adult:number = 0;
  child:number = 0;
  fare:number = 0;
  total_fare:number = 0;
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
      this.total_fare = res.data.price;
    });
  }

  passenger(): FormGroup {
    return this.fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      email: [null, Validators.required],
      phone_number: [null, Validators.required],
      age: [null, Validators.required],
      gender: [null, Validators.required],
    })
  }
  multiple_passenger = this.fb.group({
    payment: [null, Validators.required],
    passengers: this.fb.array([this.passenger()], Validators.required)
  })
  get passengers():FormArray{
    return <FormArray> this.multiple_passenger.get('passengers');
  }

  confirmBooking() :void {
    // this.flightService.bookTicket(data).subscribe(res => {
      
    // });
    this.total_fare = this.fare*this.passengers.length;
    if(confirm("Do you want to book the tickets?")) {
      console.log(this.multiple_passenger.value);
    }

  }
  onAddPassenger() :void {
    this.passengers.push(this.passenger());
    this.total_fare = this.fare*this.passengers.length;
  }
  removePassenger(i:number) :void {
    if(this.passengers.length>1)
      this.passengers.removeAt(i);
    this.total_fare = this.fare*this.passengers.length;
  }
}
