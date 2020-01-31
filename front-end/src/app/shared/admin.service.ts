import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseURI } from '../models/BaseURI.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  getHelloAdmin(){
    return this.http.get(BaseURI+'auth/gethello',{responseType: 'text'})
  }

  getAllUsers(){
    return this.http.get(BaseURI+'user/usersSmallerDto')
  }

  deleteUserById(userId){
    return this.http.delete(BaseURI+'user/delete/'+userId)
  }

}
