import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  helloMessage: string;
  UsersList: any = [];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['position','username', 'created_at', 'action'];

  constructor(private adminService : AdminService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getmessage()
    this.getUsers()
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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

  getUsers(){
    this.adminService.getAllUsers()
    .subscribe((res : any)=>{
      this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      console.log(res);      
    },
    err=>{
      console.log(err);
    })
  }

  delteUserById(userId: string, index: number) {
    this.adminService.deleteUserById(userId)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.toastr.success('New house created!', 'House Added successfully.');
          this.dataSource.data.splice(index, 1);
          this.dataSource = new MatTableDataSource(this.dataSource.data);
          this.dataSource.paginator = this.paginator;
        },
        err => {
          console.log(err);
        },
      );
  }
}
