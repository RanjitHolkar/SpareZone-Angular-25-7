import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMaintanceRoutingModule } from './admin-maintance-routing.module';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { PartsCategoryComponent } from './parts-category/parts-category.component';
import { AddImagesComponent } from './add-images/add-images.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { ApiMgmtComponent } from './api-mgmt/api-mgmt.component';
import { ProfileImgComponent } from './profile-img/profile-img.component';
import { CapriconMembersComponent } from './capricon-members/capricon-members.component';
import { ReportsFeedbackComponent } from './reports-feedback/reports-feedback.component';
import { BackgroundImagesComponent } from './background-images/background-images.component';
import { MaintenanceHomeComponent } from './maintenance-home/maintenance-home.component';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { AdminProfileComponent } from '../admin-profile/admin-profile.component';
@NgModule({
  declarations: [
    EditVehicleComponent, 
    PartsCategoryComponent, 
    AddImagesComponent, 
    PushNotificationComponent, 
    ApiMgmtComponent, 
    ProfileImgComponent, 
    CapriconMembersComponent, 
    ReportsFeedbackComponent, BackgroundImagesComponent, MaintenanceHomeComponent,AdminNavComponent, AdminProfileComponent
  ],
  imports: [
    CommonModule,
    AdminMaintanceRoutingModule
  ]
})
export class AdminMaintanceModule { }
