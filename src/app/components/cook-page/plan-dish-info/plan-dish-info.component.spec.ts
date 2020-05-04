import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDishInfoComponent } from './plan-dish-info.component';

describe('PlanDishInfoComponent', () => {
  let component: PlanDishInfoComponent;
  let fixture: ComponentFixture<PlanDishInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDishInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDishInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
