import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrderDishComponent } from '../../search-page/list-dishes/order-dish/order-dish.component';
import { PlatDate } from 'src/app/models/plat.model';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OrderDishComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlatDate) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  getEtat() {
    if(this.data.isAccepted = true){
      return "accepté";
    }
    else {
      return "en attente";
    }
  }

}
