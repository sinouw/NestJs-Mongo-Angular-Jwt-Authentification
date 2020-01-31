import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails;
  fileToUpload: File;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
      this.service.getUserProfile().subscribe(
        res => {
          this.userDetails = res;
          console.log(res);
          
        },
        err => {
          console.log(err);
        },
      );
  }


   async upload() {
  const formData: any = new FormData();
  const file: File = this.fileToUpload;

  // formData.append('file', file);
  // const res = await this.courseRep.upload(formData);
    console.log("formdata : ",formData);
    this.service.UploadImage(formData,this.userDetails.userId)
    .subscribe(res=>{
      console.log(res);
    },
    err=>{
      console.error(err);
      
    })
    
}

fileChangeEvent(fileInput: any) {
  this.fileToUpload = <File>fileInput.target.files[0];
  console.log("filesToUpload : ",this.fileToUpload);
  
}

  
}
