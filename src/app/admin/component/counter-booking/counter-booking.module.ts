import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterBookingRoutingModule } from './counter-booking-routing.module';
import { CurrentBookingComponent } from './current-booking/current-booking.component';
import { CounterBookingComponent } from './counter-booking.component';
import { AdvanceBookingComponent } from './advance-booking/advance-booking.component';


@NgModule({
  declarations: [CurrentBookingComponent, CounterBookingComponent, AdvanceBookingComponent],
  imports: [
    CommonModule,
    CounterBookingRoutingModule
  ]
})
export class CounterBookingModule { }
