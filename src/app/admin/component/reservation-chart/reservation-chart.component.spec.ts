import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationChartComponent } from './reservation-chart.component';

describe('ReservationChartComponent', () => {
  let component: ReservationChartComponent;
  let fixture: ComponentFixture<ReservationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
