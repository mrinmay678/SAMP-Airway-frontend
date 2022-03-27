import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  public flightId:any;
  constructor(private route: ActivatedRoute, private router: Router) { }
  flight_name="SAMP Airlines";
  departure = "12 June 2020  12:00"
  arrival="12 June 2020  14:00"
  source="Kolkata, India"
  dest="New Delhi, India"
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.flightId = id;
    });
  }

}
