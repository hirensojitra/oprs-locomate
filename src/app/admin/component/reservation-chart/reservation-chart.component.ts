import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-chart',
  templateUrl: './reservation-chart.component.html',
  styleUrls: ['./../common.scss', './reservation-chart.component.scss']
})
export class ReservationChartComponent implements OnInit {

  constructor(private fb: FormBuilder) {

  }
  public searchForm = this.fb.group({
    journeyDate: [null, [Validators.required]],
    journeyTime: [null, [Validators.required]],
    sourceStation: [null, [Validators.required]],
    destinationStation: [null, [Validators.required]],
    routeName: [''],
    serviceTripCode: [''],
  });
  public submitForm(): void {
    this.searchForm.markAllAsTouched();
  }

  public clearForm(): void {
    this.searchForm.reset();
  }
  ngOnInit(): void {
    //this.clearForm()
  }

}
