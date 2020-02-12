import { UserService } from '../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  role : string ="user"

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  changeRole(event){
    this.role = event.target.innerText;    
  }

  onSubmit() {
    
    
    if (this.role =="user") {
       this.service.registerForUser()
    .subscribe(
      (res: any) => {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
      },
      err => {
        console.log(err);
      }
    );
    } else {
       this.service.registerForAdmin()
    .subscribe(
      (res: any) => {
          this.service.formModel.reset();
          this.toastr.success('New admin created!', 'Registration successful.');
      },
      err => {
        console.log(err);
      }
    );
    }

  }

}
