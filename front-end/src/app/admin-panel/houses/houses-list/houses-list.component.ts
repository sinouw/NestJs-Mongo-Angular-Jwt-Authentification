import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.css']
})
export class HousesListComponent implements OnInit {

  buttonItems : string[] = ["Houses List" ,"Add House"]

  constructor() { }

  ngOnInit() {
  }

}
