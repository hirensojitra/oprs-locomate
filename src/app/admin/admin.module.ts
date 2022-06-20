import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CounterBookingComponent } from './component/counter-booking/counter-booking.component';
import { HeaderComponent } from './_common/header/header.component';
import { SidebarComponent } from './_common/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    CounterBookingComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
