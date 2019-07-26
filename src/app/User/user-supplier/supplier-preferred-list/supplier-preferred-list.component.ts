import { Component, OnInit } from '@angular/core';
import { SupplierPreferredListService } from './supplier-preferred-list.service';

@Component({
  selector: 'app-supplier-preferred-list',
  templateUrl: './supplier-preferred-list.component.html',
  styleUrls: ['./supplier-preferred-list.component.css']
})
export class SupplierPreferredListComponent implements OnInit {
  public preferedSuppliersData:any;
  public suppliersGroupData:any;
  public groupName:any = 'Genuine112';
  public hexColor:any;
  constructor(private supplierPreferedService: SupplierPreferredListService) { }

  ngOnInit(){
      this.getSupplierGroups();
      this.getPreferredSuppliersList('','');
  }

  /* Get suppliers group list */
  getSupplierGroups(){
    this.supplierPreferedService.getSupplierGroups().subscribe(res=>{
      this.suppliersGroupData = res.supplierGroups;
    })
  }

  /* Get prefered suppliers list */
  getPreferredSuppliersList(groupId,color){
    this.groupName = 'Genuine112';
    console.log(color);
    this.hexColor = color;
    console.log(this.hexColor);
    //this.groupName=info;
    this.supplierPreferedService.getPreferredSuppliersList(groupId).subscribe(result=>{
      this.preferedSuppliersData = result.preferredSuppliers ;
    })
  }

  /* Group Tab active  */
  dispalyGroupTab(info){ 
    this.groupName=info;
  }
}
