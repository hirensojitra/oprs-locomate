import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './_common/header/header.component';
import { SidebarComponent } from './_common/sidebar/sidebar.component';
//Kendo
import { InputsModule } from '@progress/kendo-angular-inputs';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LabelModule } from "@progress/kendo-angular-label";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { GridModule } from "@progress/kendo-angular-grid";
import { DialogsModule } from "@progress/kendo-angular-dialog";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationChartComponent } from './component/reservation-chart/reservation-chart.component';
import { PnrSearchComponent } from './component/pnr-search/pnr-search.component';
import { ServiceListComponent } from './component/service-list/service-list.component';
import { ReportsComponent } from './component/reports/reports.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ReservationChartComponent,
    PnrSearchComponent,
    ServiceListComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //Kendo
    InputsModule,
    IconsModule,
    LabelModule,
    ButtonsModule,
    DateInputsModule,
    GridModule,
    DialogsModule,
    DropDownsModule
  ]
})
export class AdminModule { }
