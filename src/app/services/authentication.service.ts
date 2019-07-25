import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import {observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
public base_url = environment.base_url;
  constructor(
    private router:Router,
    private httpClient:HttpClient
    ) { }
  logout(){
    if(localStorage.getItem('currentUser')){
       localStorage.removeItem('currentUser');
    }
      this.router.navigate['/login'];
      return false;
  }
  login(info:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post<any>(this.base_url + 'Login/checkLogin',info,httpOptions).pipe(map(res=>{
      if(res.success == 1){
        localStorage.setItem('currentUser',JSON.stringify(res));
        return 'success';
      }
        return res;
    }))
  }
}
