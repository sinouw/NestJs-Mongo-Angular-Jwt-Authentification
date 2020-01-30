import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  helloMessage: string;

  constructor(private adminService : AdminService,) { }

  ngOnInit() {
    this.getmessage()
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

}
