import { DishService } from './../../../services/dish-service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateDishInfoComponent } from '../create-dish-info/create-dish-info.component';
import { Plat } from 'src/app/models/plat.model';

@Component({
  selector: 'app-plan-dish',
  templateUrl: './plan-dish.component.html',
  styleUrls: ['./plan-dish.component.scss']
})
export class PlanDishComponent implements OnInit {

  plats = [];

  constructor(
    public dialogRef: MatDialogRef<CreateDishInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Plat[]) {
      console.log(data)
      this.plats = data;
    }

  ngOnInit(): void {
  }

}
