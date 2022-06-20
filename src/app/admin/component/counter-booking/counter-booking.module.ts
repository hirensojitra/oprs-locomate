import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterBookingRoutingModule } from './counter-booking-routing.module';
import { CounterBookingComponent } from './counter-booking.component';


@NgModule({
  declarations: [CounterBookingComponent],
  imports: [
    CommonModule,
    CounterBookingRoutingModule
  ]
})
export class CounterBookingModule { }
