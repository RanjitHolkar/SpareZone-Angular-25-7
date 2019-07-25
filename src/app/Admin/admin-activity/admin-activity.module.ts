import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminActivityRoutingModule } from './admin-activity-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { AdminNavComponent} from '../admin-nav/admin-nav.component';

@NgModule({
  declarations: [ActivityComponent,AdminNavComponent],
  imports: [
    CommonModule,
    AdminActivityRoutingModule
  ]
})
export class AdminActivityModule { }
