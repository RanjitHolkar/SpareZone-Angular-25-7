import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierEditRoutingModule } from './supplier-edit-routing.module';
import { SupplierEditComponent } from './supplier-edit.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SupplierEditComponent],
  imports: [
    CommonModule,
    SupplierEditRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SupplierEditModule { }
