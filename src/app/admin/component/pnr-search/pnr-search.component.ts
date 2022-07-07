import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { pnrDataType } from './pnr-data-type';
import { pnrData } from './pnr-data';
import { State } from '@progress/kendo-data-query';

@Component({
  selector: 'app-pnr-search',
  templateUrl: './pnr-search.component.html',
  styleUrls: ['./../common.scss', './pnr-search.component.scss']
})
export class PnrSearchComponent implements OnInit {
  public gridView: pnrDataType[] = pnrData;
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
  constructor(private fb: FormBuilder) {
    this.data = this.source.slice();
    this.refundTypeData = this.refundTypes.slice();
    this.paymentTypeData = this.paymentTypes.slice();
    this.reasonTypeData = this.reasonTypes.slice();
  }
  // Search Criteria Form Generator
  public searchForm = this.fb.group({
    pnrTicket: [''],
    mobile: [''],
    sourceStation: [''],
    destinationStation: [''],
    routeName: [''],
    serviceTripCode: ['', [Validators.required]],
    serviceDate: [''],
  });
  // Search PNR input form
  public searchPNR = this.fb.group({
    searchInput: [null, []]
  })

  // Search Criteria Form Submit
  public submitForm(): void {
    this.searchForm.markAllAsTouched();
  }
  // Search Criteria Form Clear
  public clearForm(): void {
    this.searchForm.reset();
  }
  //Refund Dialog
  public openedRefund = true;
  public closeRefund(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.openedRefund = false;
  }
  public openeRefund(): void {
    this.openedRefund = true;
  }
  public source: Array<{ text: string; value: number }> = [
    { text: "Base Fare", value: 1 },
    { text: "Type 2", value: 2 },
    { text: "Type 3", value: 3 },
  ];
  public refundTypes: Array<{ text: string; value: number }> = [
    { text: "Percentage", value: 1 },
    { text: "Ammount", value: 2 }
  ];
  public paymentTypes: Array<{ text: string; value: number }> = [
    { text: "Google Pay", value: 1 },
    { text: "Phone Pay", value: 2 },
    { text: "Phone UPI", value: 3 },
  ];
  public reasonTypes: Array<{ text: string; value: number }> = [
    { text: "Custom", value: 1 },
    { text: "Other", value: 2 },
    { text: "Cancelled", value: 3 },
  ];
  public data: Array<{ text: string; value: number }>
  public refundTypeData: Array<{ text: string; value: number }>
  public paymentTypeData: Array<{ text: string; value: number }>
  public reasonTypeData: Array<{ text: string; value: number }>
  public refundForm = this.fb.group({
    applyOn: new FormControl(1),
    refundType: new FormControl('1'),
    ammount: new FormControl(''),
    refundTypeMode: new FormControl(1),
    paymentType: new FormControl('1'),
    paymentTypeMode: new FormControl(1),
    referenceNo: new FormControl(''),
    reasonType: new FormControl(1),
    reasonDescription: new FormControl('')
  })
  ngOnInit(): void {
    this.clearForm()
  }
}
