import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { Plat, Reservation } from 'src/app/models/plat.model';
import { OrderDishComponent } from '../../search-page/list-dishes/order-dish/order-dish.component';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-create-dish-info',
  templateUrl: './create-dish-info.component.html',
  styleUrls: ['./create-dish-info.component.scss']
})
export class CreateDishInfoComponent implements OnInit {

  imagePath = '';

  constructor(
    public dialogRef: MatDialogRef<CreateDishInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Plat) {
      console.log(data.title)
    }

  ngOnInit(): void {
    this.imagePath = 'http://127.0.0.1:8887/' + this.data.images ;
    console.log(this.data)
  }

}
