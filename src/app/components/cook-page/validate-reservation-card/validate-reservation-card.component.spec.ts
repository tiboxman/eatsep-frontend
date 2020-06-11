import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateReservationCardComponent } from './validate-reservation-card.component';

describe('ValidateReservationCardComponent', () => {
  let component: ValidateReservationCardComponent;
  let fixture: ComponentFixture<ValidateReservationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateReservationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateReservationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
