import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SideNavBarService } from './side-nav-bar.service';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  navIsOpened: boolean=true;
  isAdmin: any;
  adminMenuItemsList : string[] =  ["Profile","Houses","Clients","Go to site"]
  userMenuItemsList : string[] =  ["Profile","Houses","Go to site"]
  selectedCompName : string =""

  constructor(private router: Router,
    private service: UserService,
    private sideBarService: SideNavBarService) {}
    ngOnInit() {
      let currentRoles =this.service.getDecodedToken().roles;
      this.isAdmin = currentRoles.some(role => currentRoles.includes("admin"));
    }
    
    SendCompName(comp): void {
      this.selectedCompName=comp;
      
      this.sideBarService.SendCompName(comp)
    }
        
    clearCompName(): void {
      // clear cart
      this.sideBarService.clearcompName();
    }

    onLogout() {
      localStorage.removeItem('token');
      this.router.navigate(['/user/login']);
    }

}
