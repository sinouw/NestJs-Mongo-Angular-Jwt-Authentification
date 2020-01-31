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
  
  getUserById(id : string){
    return this.http.get(BaseURI+'user/'+id)
  }

  userExists(id : string){
    return this.http.get(BaseURI+'user/check/'+id)
  }

  createNewUser(user){
    return this.http.post(BaseURI+'user/create',user)
  }

  editUserById(id : string , user ){
    return this.http.put(BaseURI+'user/update/'+id,user)
  }

  deleteUserById(userId){
    return this.http.delete(BaseURI+'user/delete/'+userId)
  }

}
