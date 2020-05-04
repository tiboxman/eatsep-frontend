import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDishCardComponent } from './add-dish-card.component';

describe('AddDishCardComponent', () => {
  let component: AddDishCardComponent;
  let fixture: ComponentFixture<AddDishCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDishCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDishCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
