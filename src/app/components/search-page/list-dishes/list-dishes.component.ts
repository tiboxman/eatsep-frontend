import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrderDishComponent } from './order-dish/order-dish.component';

@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.scss']

})
export class ListDishesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  OrderDis(): void {
    const dialogRef = this.dialog.open(OrderDishComponent, {
    hasBackdrop: true,
      maxWidth: '800px',
      maxHeight: '800px'
      //data: {id: _id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
