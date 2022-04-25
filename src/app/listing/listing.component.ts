import { Component, OnInit } from '@angular/core';
import { ListingService } from './listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  locations = new Array<any>();
  rows = new Array<any>();
  tableData = false;

  constructor(public listingService: ListingService) { }
  ngOnInit(): void {
    this.listingService.getLocations().subscribe(res => {
      this.locations = res.data.location;
    });
  }

  today = new Date();

  dd:any = String(this.today.getDate()).padStart(2, '0');
  mm:any = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy:any = this.today.getFullYear();

  today_date = this.dd + '/' + this.mm + '/' + this.yyyy;

  getFlight(data:any) :void{
    this.listingService.getFlights(data).subscribe(res => {
      this.tableData = true;
      this.rows = res.data.flights;
    });
  }

  headers=["Flight Name","Departure Time","Arrival Time","Fare"];

}
