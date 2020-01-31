import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SideNavBarService } from 'src/app/menu/side-nav-bar/side-nav-bar.service';
import { HousesService } from '../services/houses.service';
import { CreateHouseDto } from 'src/app/models/create-house-dto';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {


  selectedComp : string = "Houses List";
  buttonsList : string[] =  ["Houses List","Add House"]
  subscription: Subscription;
  houseDetails: any;
  
  constructor(private housesService : HousesService) { }

  ngOnInit() {
    this.subscription = this.housesService.getHouseSubcription().subscribe(house => {
      if (house) {
       this.houseDetails = house ;
       this.selectedComp="House Details"

      } 
    });

    this.selectComponent()
  }

  selectComponent(componentName : string = this.selectedComp) : void {
      this.selectedComp = componentName;

      console.log(componentName);
       
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    }

}
