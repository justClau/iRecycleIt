import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  lat = 45.9432;
  lon = 24.9668;

  constructor() { }

  ngOnInit() {
  }

}
