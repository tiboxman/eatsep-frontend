import { DishService } from './../../../../services/dish-service';
import { PlatDate } from 'src/app/models/plat.model';
import { Plat } from './../../../../models/plat.model';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-order-dish',
  templateUrl: './order-dish.component.html',
  styleUrls: ['./order-dish.component.scss']
})
export class OrderDishComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<OrderDishComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlatDate, private dishService: DishService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  order() {
    this.dishService.createDishDate(this.data, '5ef4a88e8da92159b09876f8').subscribe(res => {
      console.log(res);
      this.dialogRef.close();
    });
  }

  ngOnInit(): void {
  }

}
