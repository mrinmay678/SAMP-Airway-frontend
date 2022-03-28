import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  rows = new Array<any>();
  name=""
  email=""
  dob=""
  phone_number=""
  headers=["Flight Name","Source","Destination","Departure"];
  tableData=false;

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(res => {
        this.email=res.data.email;
        this.name=res.data.first_name +" "+ res.data.last_name;
        this.dob=res.data.dob;
        this.phone_number=res.data.country_code+res.data.phone_number;
        this.rows=res.data.flights;
        if(this.rows!==[]) this.tableData=true;
    });
  }


}
