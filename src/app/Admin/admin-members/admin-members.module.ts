import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMembersRoutingModule } from './admin-members-routing.module';
import { MembersListComponent } from './members-list/members-list.component';
import { ViewAccountComponent } from './view-account/view-account.component';

@NgModule({
  declarations: [MembersListComponent, ViewAccountComponent],
  imports: [
    CommonModule,
    AdminMembersRoutingModule
  ]
})
export class AdminMembersModule { }
