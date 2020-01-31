import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import { Subscription } from 'rxjs';
import { SideNavBarService } from '../menu/side-nav-bar/side-nav-bar.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',

})
export class AdminPanelComponent implements OnInit {
  
  subscription: Subscription;

  // compName: any = "Profile";
  compName: any = "";
  helloMessage: string="";
  isAdmin: any;

  constructor(private adminService : AdminService,
    private sideBarService: SideNavBarService,
    private router : Router,
    private service: UserService,
    ) 
  {
    
    let redirectUrl : string = (this.router.url).split("/")[2]
    if(redirectUrl){
      let componentRoute = redirectUrl.toLowerCase()
      //to Upper the first Letter
      this.compName=componentRoute.charAt(0).toUpperCase() + componentRoute.slice(1);
      //redirect to the component at the url
      this.router.navigate(['/adminpanel/'+componentRoute]);


    }else{
      
      this.RouterGetProfile()
      this.compName="Profile"
      // let componentRoute = redirectUrl.toLowerCase()
    }
    // subscribe to  component name
    this.subscription = this.sideBarService.getcompName().subscribe(compName => {
      if (compName) {
        if (compName.name=="Go to site") {
            this.RouterGoHome()
        }else{
          this.compName=compName.name;
          this.router.navigate(['/adminpanel/'+this.compName.toLowerCase()]);
        }
      } 
        else {
          // clear compNames
          this.compName="";
        }
    });

    let currentRoles =this.service.getDecodedToken().roles;
    this.isAdmin = currentRoles.some(role => currentRoles.includes("admin"));
    if (this.isAdmin) {
      this.getmessage()
    }
  }
   
  ngOnInit() {
  //  this.getmessage()
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
  RouterGetProfile(){
    this.router.navigate(['/adminpanel/profile']);
  }

}
