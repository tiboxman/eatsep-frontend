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
    @Inject(MAT_DIALOG_DATA) public data: Plat) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
