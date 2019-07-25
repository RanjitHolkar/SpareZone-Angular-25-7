import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDashRoutingModule } from './customer-dash-routing.module';
import { CustomerDashComponent } from './customer-dash.component';

@NgModule({
  declarations: [CustomerDashComponent],
  imports: [
    CommonModule,
    CustomerDashRoutingModule
  ]
})
export class CustomerDashModule { }
