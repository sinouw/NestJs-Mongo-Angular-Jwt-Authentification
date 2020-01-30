import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-globalheader',
  templateUrl: './globalheader.component.html',
  styleUrls: ['./globalheader.component.css']
})
export class GlobalheaderComponent implements OnInit {
  isAdmin = false;
  constructor(private router: Router,private service: UserService) { }

  ngOnInit() {
    this.isAdmin = this.service.tokenExists()
    console.log(this.isAdmin);
  }

  onAdmiProfile() {
    this.router.navigate(['/adminpanel']);
  }

  onSignIn() {
    this.router.navigate(['/user/login']);
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

}
