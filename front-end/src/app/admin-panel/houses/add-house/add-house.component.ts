import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { AdminService } from 'src/app/shared/admin.service';
import { HousesService } from '../../services/houses.service';


@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {
  info: FormGroup;
  UsersList: any[]=[];

  constructor(private formGroup: FormBuilder,
    private usersService : UserService,
    private housesService : HousesService,
    
    ) { }
  
  ngOnInit() {
    let userId = this.usersService.getDecodedToken().sub;

      this.info = this.formGroup.group({
        title: ['', [Validators.required]],
        description: ['', [Validators.required]],
        owner: userId,
    });
  }


  createHouse(){
    // console.log(this.info.value);
    
    this.housesService.createNewHouse(this.info.value)
    .subscribe(res=>{
      console.log(res);
    },
    err=>{
      console.log(err);
    })
  }
 


}
