import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-houses-details',
  templateUrl: './houses-details.component.html',
  styleUrls: ['./houses-details.component.css']
})
export class HousesDetailsComponent implements OnInit {
  info: FormGroup;
  
  
  
  constructor(private formGroup: FormBuilder) { }
  
  ngOnInit() {
    this.info = this.formGroup.group({
      UserName: ['', [Validators.required]],
      FullName: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      PhoneNumber: ['', [Validators.required]],
      Email: ['', [Validators.required]]
  });
  }

}
