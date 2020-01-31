import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails;
  fileToUpload: File;
  userImage: any;



  constructor(private router: Router, private service: UserService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;

            this.service.GetImageUrl(this.userDetails.userId)
          .subscribe((res: any) => {
      
            this.userImage= res
            console.log(res);
            
          },
            err => {
              console.log(err);
            })

      },
      err => {
        console.log(err);
      },
    );
  }


  async upload() {

    const formData: any = new FormData();
    const file: File = this.fileToUpload;
    if (file == null || file == undefined) {
      this.toastr.error('Chose an Image!', 'Avatar Upload');
    } else {
      formData.append('file', file);
      this.service.UploadImage(formData, this.userDetails.userId)
        .subscribe(res => {
          console.log(res);
        },
          err => {
            console.error(err);
          })
    }

  }

  fileChangeEvent(fileInput: any) {
    this.fileToUpload = <File>fileInput.target.files[0];
  }



}
