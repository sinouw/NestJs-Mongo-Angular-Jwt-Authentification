import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  listCompSelected : boolean = true ;
  selectedComp : string = "Houses List";
  buttonsList : string[] =  ["Houses List","Add House"]

  constructor() { }

  ngOnInit() {
    this.selectComponent()
  }

  selectComponent(componentName : string = this.selectedComp) : void {
    
    if(componentName == "Houses List"){
      this.listCompSelected = true;
      this.selectedComp = componentName;
    }else{
      this.listCompSelected = false;
      this.selectedComp = componentName;
    }
    
  }

}
