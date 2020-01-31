import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { AdminService } from 'src/app/shared/admin.service';
import { HousesService } from '../../services/houses.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {
  info: FormGroup;
  UsersList: any[]=[];
  userId: any;

  constructor(private formGroup: FormBuilder,
    private usersService : UserService,
    private housesService : HousesService,
    private toastr: ToastrService
    
    ) { }
  
  ngOnInit() {
    this.userId = this.usersService.getDecodedToken().sub;

      this.info = this.formGroup.group({
        title: ['', [Validators.required]],
        description: ['', [Validators.required]],
        owner: this.userId,
    });
  }


  createHouse(){    
    this.housesService.createNewHouse(this.info.value)
    .subscribe(res=>{
      console.log(res);
      this.info.patchValue({
        title: '',
        description: '',
        owner: this.userId,
      })
      this.toastr.success('New house created!', 'House Added successfully.');
    },
    err=>{
      console.log(err);
    })
  }
 


}
