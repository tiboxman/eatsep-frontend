import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrderDishComponent } from './order-dish/order-dish.component';
import { Plat, PlatDate } from 'src/app/models/plat.model';

@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.scss']

})
export class ListDishesComponent implements OnInit {

  @Input() dishes: PlatDate[];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  OrderDis(plat): void {
    const dialogRef = this.dialog.open(OrderDishComponent, {
    hasBackdrop: true,
      maxWidth: '800px',
      maxHeight: '800px',
      data: plat
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
