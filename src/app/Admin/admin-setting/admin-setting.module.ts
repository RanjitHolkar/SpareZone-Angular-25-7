import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSettingRoutingModule } from './admin-setting-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { GeneralSettingComponent } from './general-setting/general-setting.component';
import { SupplierSettingComponent } from './supplier-setting/supplier-setting.component';
import { CmsSettingComponent } from './cms-setting/cms-setting.component';
import { NavSettingComponent } from './nav-setting/nav-setting.component';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { AdminProfileComponent } from '../admin-profile/admin-profile.component';
import { NotificationComponent } from '../notification/notification.component';

@NgModule({
  declarations: [
    ProfileSettingComponent,
    GeneralSettingComponent,
    SupplierSettingComponent, 
    CmsSettingComponent, 
    NavSettingComponent,
    AdminNavComponent,
    AdminProfileComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    AdminSettingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminSettingModule { }
