import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import { Subscription } from 'rxjs';
import { SideNavBarService } from '../menu/side-nav-bar/side-nav-bar.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',

})
export class AdminPanelComponent implements OnInit {
  helloMessage: string;
  subscription: Subscription;
  compName: any = "Profile";
  constructor(private adminService : AdminService,
    private sideBarService: SideNavBarService) 
  {
    // subscribe to  component name
    this.subscription = this.sideBarService.getcompName().subscribe(compName => {
      if (compName) {
        this.compName=compName;
        console.log(this.compName.name);
      } 
        else {
          // clear compNames
          this.compName="";
        }
    });
  }
   
  ngOnInit() {
   this.getmessage()
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    }

  getmessage(){
    this.adminService.getHelloAdmin()
    .subscribe(res=>{
      this.helloMessage = res;
    },
    err=>{
     console.log(err);
  })
  }

}
