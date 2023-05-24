import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable(
  {
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient, private router:Router) {}

  //add user 

  public addAdmin(admin:any)
  {
    return this.http.post(`${baseUrl}/admin/addAdmin`,admin);
  }

  public logIn(user:any){
    return this.http.post(`${baseUrl}/admin/login`, user);

  }


}
