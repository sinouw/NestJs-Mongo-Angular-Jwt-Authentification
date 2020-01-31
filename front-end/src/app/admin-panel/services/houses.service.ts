import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseURI } from 'src/app/models/BaseURI.model';
import { CreateHouseDto } from 'src/app/models/create-house-dto';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private http : HttpClient) { }

  getAllHouses(){
    return this.http.get(BaseURI+'houses/getAll')
  }

  getHousesByUserId(userId){
    return this.http.get(BaseURI+'houses/getByUserId/'+userId)
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

  editHouseById(id : string , house ){
    return this.http.put(BaseURI+'houses/update/'+id,house)
  }

  deleteHouseById(id : string){
    return this.http.delete(BaseURI+'houses/delete/'+id)
  }


  private subject = new Subject<any>();
 
  SendHouseSubcription(houseBody) {
  this.subject.next(houseBody);
  }
  
  clearHouseSubcription() {
  this.subject.next();
  }
  
  getHouseSubcription(): Observable<any>{
  return this.subject.asObservable();
  }

}
