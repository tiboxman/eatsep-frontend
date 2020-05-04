import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDishInfoComponent } from './create-dish-info.component';

describe('CreateDishInfoComponent', () => {
  let component: CreateDishInfoComponent;
  let fixture: ComponentFixture<CreateDishInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDishInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDishInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
