import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path:'',loadChildren: './login/login.module#LoginModule' 
  },
  {
    path:'login',loadChildren: './login/login.module#LoginModule' 
  },
  {
    path:'admin-activity',loadChildren: './Admin/admin-activity/admin-activity.module#AdminActivityModule' 
  },
  {
    path:'admin-setting',loadChildren: './Admin/admin-setting/admin-setting.module#AdminSettingModule' 
  },
  {
    path: 'signup-customer',loadChildren: './User/signup/signup-customer/signup-customer.module#SignupCustomerModule'
  },
  {
    path: 'signup-supplier',loadChildren: './User/signup/signup-supplier/signup-supplier.module#SignupSupplierModule'
  },
  {
    path:'supplier-preferred-list',loadChildren:'./User/user-supplier/user-supplier.module#UserSupplierModule'
  },
  {
    path:'add-vehicle',loadChildren:'./User/user-customer/customer-vehicle/customer-vehicle.module#CustomerVehicleModule'
  },
  {
    path:'admin-maintenance',loadChildren:'./Admin/admin-maintance/admin-maintance.module#AdminMaintanceModule'
  },
  {
    path:'supplier-dash',loadChildren:'./User/user-supplier/supplier-dash/supplier-dash.module#SupplierDashModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
