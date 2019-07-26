import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SupplierPreferredListService {
  public custId:number ;
  public limit:number=1 ;
  public userdata =[];
  public url = 'http://portfolio.theaxontech.com/CI/sparezone/Admin/Setting/getSupplierGroups';
  public supplierUrl = 'http://portfolio.theaxontech.com/CI/sparezone/SupplierPreferred/getPreferredSuppliersList/';
 
  constructor(private httpClient: HttpClient) { }
 
  /* Get suppliers group list */
  getSupplierGroups(){
    return this.httpClient.get<any>(this.url).pipe(map(result=>{
      return result;
    }))
  }

  /* Get prefered suppliers list */
  getPreferredSuppliersList(groupId:number){ 
   this.userdata=JSON.parse(localStorage.getItem('currentUser'));
   this.custId = this.userdata['userData']['user_table_id'];
    return this.httpClient.get<any>(this.supplierUrl + this.custId + '/' + groupId + '/' + this.limit).pipe(map(res=>{
      return res;
    }))
  }
}
