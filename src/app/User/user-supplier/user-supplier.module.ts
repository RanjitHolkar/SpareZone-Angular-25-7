import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSupplierRoutingModule } from './user-supplier-routing.module';
import { SupplierPreferredListComponent } from './supplier-preferred-list/supplier-preferred-list.component';

@NgModule({
  declarations: [SupplierPreferredListComponent],
  imports: [
    CommonModule,
    UserSupplierRoutingModule
  ]
})
export class UserSupplierModule { }
