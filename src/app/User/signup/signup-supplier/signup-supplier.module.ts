import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupSupplierRoutingModule } from './signup-supplier-routing.module';
import { SignupSupplierComponent } from './signup-supplier.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SignupSupplierComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignupSupplierRoutingModule
  ]
})
export class SignupSupplierModule { }
