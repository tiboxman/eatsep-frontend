import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDishComponent } from './plan-dish.component';

describe('PlanDishComponent', () => {
  let component: PlanDishComponent;
  let fixture: ComponentFixture<PlanDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
