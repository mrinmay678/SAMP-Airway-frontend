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
  public tripId:any;
  constructor(public flightService: FlightsService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }
  flight_name="";
  departure = "";
  arrival="";
  source="";
  dest="";
  fare:number = 0;
  total_fare:number = 0;
  username="admin"
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.flightId = params.get('flight_id');
      this.tripId = params.get('trip_id');
    });
    this.flightService.getFlightDetail(this.tripId).subscribe(res => {
      this.flight_name = res.data.trip.flight_name;
      this.departure = res.data.trip.departure;
      this.arrival = res.data.trip.arrival;
      this.source = res.data.trip.source;
      this.dest = res.data.trip.destination;
      this.fare = res.data.trip.fare;
      this.total_fare = res.data.trip.fare;
    });
  }

  passenger(): FormGroup {
    return this.fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      age: [null, Validators.required],
      // gender: [null, Validators.required],
    })
  }

  multiple_passenger = this.fb.group({
    payment: [null, Validators.required],
    passengers: this.fb.array([this.passenger()], Validators.required),
    username: [this.username, Validators.required],
    trip: [null, Validators.required],
    flight: [null, Validators.required],
    total_fare: [null, Validators.required],
  })
  get passengers():FormArray{
    return <FormArray> this.multiple_passenger.get('passengers');
  }

  confirmBooking() :void {
    this.total_fare = this.fare*this.passengers.length;
    if(confirm("Do you want to book the tickets?")) {
      this.multiple_passenger.patchValue({
        total_fare: this.total_fare,
        trip: parseInt(this.tripId),
        flight: parseInt(this.flightId)
      });
      console.log(this.multiple_passenger.value);
      this.flightService.bookTicket(this.multiple_passenger.value).subscribe(
        (res) => {
          if(res.data.confirmed == true) {
            alert("Your Ticket for this Flight is booked");
          }
          else {
            alert(res.data.message);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }

  }
  onAddPassenger() :void {
    this.passengers.push(this.passenger());
    this.total_fare = this.fare*this.passengers.length;
  }
  removePassenger(i:number) :void {
    console.log(this.multiple_passenger.value);
    if(this.passengers.length>1)
      this.passengers.removeAt(i);
    this.total_fare = this.fare*this.passengers.length;
  }
}

