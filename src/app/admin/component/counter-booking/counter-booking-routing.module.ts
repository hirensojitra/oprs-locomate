import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentBookingComponent } from './current-booking/current-booking.component';
import { AdvanceBookingComponent } from './advance-booking/advance-booking.component';

const routes: Routes = [
  { path: '', redirectTo: 'current-booking', pathMatch: 'full' },
  { path: 'current-booking', component: CurrentBookingComponent },
  { path: 'advance-booking', component: AdvanceBookingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterBookingRoutingModule { }
