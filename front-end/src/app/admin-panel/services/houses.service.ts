import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BaseURI } from 'src/app/models/BaseURI.model';
import { CreateHouseDto } from 'src/app/models/create-house-dto';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private http : HttpClient) { }

  getAllHouses(){
    return this.http.get(BaseURI+'houses/getAll')
  }

  getHouseById(id : string){
    return this.http.get(BaseURI+'houses/'+id)
  }

  houseExists(id : string){
    return this.http.get(BaseURI+'houses/check/'+id)
  }

  createNewHouse(house : CreateHouseDto){
    return this.http.post(BaseURI+'houses/create',house)
  }
}
