import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PlatDate } from 'src/app/models/plat.model';
import { DishService } from 'src/app/services/dish-service';

@Component({
  selector: 'app-plan-dish-info',
  templateUrl: './plan-dish-info.component.html',
  styleUrls: ['./plan-dish-info.component.scss']
})
export class PlanDishInfoComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: PlatDate, private dishService: DishService) { }

  ngOnInit(): void {
  }

}
