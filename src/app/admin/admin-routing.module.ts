import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CounterBookingComponent } from './component/counter-booking/counter-booking.component';
import { ReservationChartComponent } from './component/reservation-chart/reservation-chart.component';
import { PnrSearchComponent } from './component/pnr-search/pnr-search.component';
import { ServiceListComponent } from './component/service-list/service-list.component';
import { ReportsComponent } from './component/reports/reports.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'counter-booking', component: CounterBookingComponent, children: [
      { path: '', loadChildren: () => import('./component/counter-booking/counter-booking.module').then(m => m.CounterBookingModule) }
    ]
  },
  { path: 'reservation-chart', component: ReservationChartComponent },
  { path: 'pnr-search', component: PnrSearchComponent },
  { path: 'service-list', component: ServiceListComponent },
  { path: 'reports', component: ReportsComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
