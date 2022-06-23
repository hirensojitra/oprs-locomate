import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceBookingComponent } from './advance-booking.component';

describe('AdvanceBookingComponent', () => {
  let component: AdvanceBookingComponent;
  let fixture: ComponentFixture<AdvanceBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
