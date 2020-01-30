import { Component, OnInit, ViewChild } from '@angular/core';
import { HousesService } from '../../services/houses.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { CreateHouseDto } from 'src/app/models/create-house-dto';
import { HttpClient } from '@angular/common/http';
import { BaseURI } from 'src/app/models/BaseURI.model';



@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.css']
})

export class HousesListComponent implements OnInit {

  buttonItems: string[] = ["Houses List", "Add House"]

  constructor(private housesService: HousesService,
    private http: HttpClient) { }
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['position', 'title', 'description', 'created_at', 'action'];

  ngOnInit() {
    this.getAll()
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAll() {
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


  editHouse(houseId: string, index: number) {
    this.housesService.getHouseById(houseId)
      .subscribe(
        (res: any) => {
          console.log(res);
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
        },
        err => {
          console.log(err);
        },
      );

  }

}
