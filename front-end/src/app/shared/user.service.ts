import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BaseURI } from '../models/BaseURI.model';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  formModel = this.fb.group({
    username: ['', Validators.required],
    Passwords: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  UploadImage(file : File,id : string) {
    return this.http.post(BaseURI + 'user/avatar/'+id,file);
  }

  GetImage(id : string) {
    return this.http.get(BaseURI + 'user/avatars/'+id,{responseType: 'text'});
  }

  GetImageUrl(id : string) {
    return this.http.get(BaseURI + 'user/avatars/url/'+id);
  }

  registerForUser() {
    var body = {
      username: this.formModel.value.username,
      password: this.formModel.value.Passwords.password,
      roles: ["user"]
    };
    return this.http.post(BaseURI + 'auth/register', body);
  }
  
  registerForAdmin() {
    var body = {
      username: this.formModel.value.username,
      password: this.formModel.value.Passwords.password,
      roles: ["admin"]
    };
    return this.http.post(BaseURI + 'auth/register', body);
  }
  

  login(formData) {
    return this.http.post(BaseURI + 'auth/login', formData)
  }

  getUserProfile() {
    return this.http.get(BaseURI + 'auth/profile');
  }

  tokenExists(): boolean {
    let token = localStorage.getItem('token');
    if (token == null || token == undefined) {
      return false
    }
    else {
      return true
    }
  }

  getDecodedToken() {
    let token = localStorage.getItem('token');
    return jwt_decode(token);
  }

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('password').value != confirmPswrdCtrl.value) {
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      }
      else {
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }
}
