import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavBarService {

  constructor() { }

  private subject = new Subject<any>();
 
  SendCompName(compName:string) {
  this.subject.next({name:compName});
  }
  
  clearcompName() {
  this.subject.next();
  }
  
  getcompName(): Observable<any>{
  return this.subject.asObservable();
  }
}
