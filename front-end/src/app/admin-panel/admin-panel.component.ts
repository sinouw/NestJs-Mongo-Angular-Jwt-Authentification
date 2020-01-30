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
  
  subscription: Subscription;

  compName: any = "Profile";
  helloMessage: string;

  constructor(private adminService : AdminService,
    private sideBarService: SideNavBarService,
    private router : Router) 
  {
    // subscribe to  component name
    this.subscription = this.sideBarService.getcompName().subscribe(compName => {
      if (compName) {
        if (compName.name=="Go to site") {
            this.RouterGoHome()
        }
        this.compName=compName.name;
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

  RouterGoHome(){
    this.router.navigate(['/home']);
  }

}
