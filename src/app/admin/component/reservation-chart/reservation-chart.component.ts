import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReservationChartDataType, ReservationChartHistoryDataType } from './reservation-chart-data-type';
import { reservationChartData, reservationChartHistoryData } from './reservation-chart-data';
import { State } from '@progress/kendo-data-query';

@Component({
  selector: 'app-reservation-chart',
  templateUrl: './reservation-chart.component.html',
  styleUrls: ['./../common.scss', './reservation-chart.component.scss']
})
export class ReservationChartComponent implements OnInit {
  public gridView: ReservationChartDataType[] = reservationChartData;
  public gridViewHistory: ReservationChartHistoryDataType[] = reservationChartHistoryData;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  public gridStateHistory: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  constructor(private fb: FormBuilder) { }
  // Search Criteria Form Generator
  public searchForm = this.fb.group({
    journeyDate: [null, [Validators.required]],
    journeyTime: [null, [Validators.required]],
    sourceStation: [null, [Validators.required]],
    destinationStation: [null, [Validators.required]],
    routeName: [''],
    serviceTripCode: [''],
  });
  // Search Criteria Form Submit
  public submitForm(): void {
    this.searchForm.markAllAsTouched();
  }
  // Search Criteria Form Clear
  public clearForm(): void {
    this.searchForm.reset();
  }
  //Reservation History Dialog
  public openedReservationHistory = false;
  public closeReservationHistory(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.openedReservationHistory = false;
  }
  public openeReservationHistory(): void {
    this.openedReservationHistory = true;
  }

  ngOnInit(): void {
    this.clearForm()
  }

}
