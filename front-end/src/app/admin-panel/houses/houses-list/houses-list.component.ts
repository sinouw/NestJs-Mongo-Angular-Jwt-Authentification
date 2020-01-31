import { Component, OnInit, ViewChild } from '@angular/core';
import { HousesService } from '../../services/houses.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { CreateHouseDto } from 'src/app/models/create-house-dto';
import { HttpClient } from '@angular/common/http';
import { BaseURI } from 'src/app/models/BaseURI.model';
import { SideNavBarService } from 'src/app/menu/side-nav-bar/side-nav-bar.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';



@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.css']
})

export class HousesListComponent implements OnInit {

  buttonItems: string[] = ["Houses List", "Add House"]
  userId: any;
  isAdmin: boolean;

  constructor(private housesService: HousesService,
    private usersService : UserService,
    private toastr: ToastrService
    ) { }
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['position', 'title', 'description', 'created_at', 'action'];

  ngOnInit() {
    let token =this.usersService.getDecodedToken();
    let currentRoles = token.roles;
    let currentUserId = token.sub;
    this.isAdmin = currentRoles.some(role => currentRoles.includes("admin"));
    if(this.isAdmin == true) {
      this.getAllForAdmin()
    }
    else{
      this.getAllForUser(currentUserId)
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllForAdmin() {
    this.housesService.getAllHouses().subscribe(
      (res: any) => {
        console.log(res);

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      err => {
        console.log(err);
      },
    );
  }

  getAllForUser(id){
  this.housesService.getHousesByUserId(id).subscribe(
      (res: any) => {
        console.log(res);

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      err => {
        console.log(err);
      },
    );
  }

  editHouse(houseId: string, index: number) {
    this.housesService.getHouseById(houseId)
      .subscribe(
        (res: any) => {
          this.SendHouseSubcription(res);
        },
        err => {
          console.log(err);
        },
      );
  }

  deleteHouseById(houseId: string, index: number) {
    this.housesService.deleteHouseById(houseId)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.dataSource.data.splice(index, 1);
          this.dataSource = new MatTableDataSource(this.dataSource.data);
          this.dataSource.paginator = this.paginator;
          this.toastr.info('House Suppression !', 'House deleted successfully.');

        },
        err => {
          console.log(err);
        },
      );
  }

  SendHouseSubcription(house): void {    
    this.housesService.SendHouseSubcription(house)
  }
      
  clearHouseSubcription(): void {
    // clear cart
    this.housesService.clearHouseSubcription();
  }

}
