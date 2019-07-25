import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupCustomerRoutingModule } from './signup-customer-routing.module';
import { SignupCustomerComponent } from './signup-customer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import * as $ from "jquery";

@NgModule({
  declarations: [
    SignupCustomerComponent
  ],
  imports: [
    CommonModule,
    SignupCustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SignupCustomerModule { }
