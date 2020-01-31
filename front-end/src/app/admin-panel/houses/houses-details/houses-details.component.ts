import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HousesService } from '../../services/houses.service';
import { CreateHouseDto } from 'src/app/models/create-house-dto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-houses-details',
  templateUrl: './houses-details.component.html',
  styleUrls: ['./houses-details.component.css']
})
export class HousesDetailsComponent implements OnInit {
  info: FormGroup;
  subscription: Subscription;
  @Input() house: CreateHouseDto;

  constructor(private formGroup: FormBuilder,
    private housesService : HousesService,
    private toastr: ToastrService) { }

  ngOnInit() {
 
    // console.log(this.house);

    this.info = this.formGroup.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      owner: '',
    });


    this.info.patchValue({
            title: this.house.title,
            description: this.house.description,
            owner: this.house.owner,
          })

  }

  EditHouse(){
    console.log(this.info.value);
    
    this.housesService.editHouseById(this.house._id,this.info.value)
    .subscribe(res=>{
      console.log(res);
      this.toastr.success('House Edition!', 'House edited successfully.');
    },
    err=>{
      console.log(err);
    })
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
