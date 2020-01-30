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

  buttonItems : string[] = ["Houses List" ,"Add House"]

  constructor(private housesService : HousesService,
    private http : HttpClient) {}
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['position','title', 'description', 'created_at','action'];

  ngOnInit() {
    this.getAll()
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAll(){
    this.housesService.getAllHouses().subscribe(
      (res:any) => {
        console.log(res);
        
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;        
      },
      err => {
        console.log(err);
      },
    );
  }

  editHouse(houseId : string , index : number){
    console.log(houseId,index);
  }

  deleteHouseById(houseId : string , index : number){
    console.log(houseId,index);
    
  }

}
