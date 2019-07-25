import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierDashRoutingModule } from './supplier-dash-routing.module';
import { SupplierDashComponent } from './supplier-dash.component';

@NgModule({
  declarations: [SupplierDashComponent],
  imports: [
    CommonModule,
    SupplierDashRoutingModule
  ]
})
export class SupplierDashModule { }
