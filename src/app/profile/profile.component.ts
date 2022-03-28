import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  rows = new Array<any>();
  constructor() { }

  name=""
  email=""
  phone_number=""

  
  ngOnInit(): void {
  }

}
