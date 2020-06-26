import { PlatDate } from './../../../models/plat.model';
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

  plats: Plat[] = [];

  date: Date;
  location;
  currentPlat;

  constructor(
    public dialogRef: MatDialogRef<CreateDishInfoComponent>,
    private dishService: DishService) {

    }

  ngOnInit(): void {
    this.dishService.getD().subscribe(res => {
          this.plats = res;
    })
  }

  changeLocation(location) {
    this.location = location;
  }

  changeDete(date) {
    this.date = date;
  }

  changePlat(plat) {
    this.currentPlat = plat;
    console.log(plat);
  }

  onChangeDish(value) {
    this.currentPlat = value;
    console.log(value);
  }

  onChange(value) {
    console.log(value);
    this.location = value;
  }

  save() {
    console.log(this.currentPlat);
    this.dishService.createNewDishDate(this.date, this.currentPlat, this.location ).subscribe(res => {
      console.log(res);
    });
  }

}
