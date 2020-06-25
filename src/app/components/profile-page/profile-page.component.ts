import { Reservation } from './../../models/plat.model';
import { DishService } from './../../services/dish-service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrderInfoComponent } from './order-info/order-info.component';
//import { DishCardComponent } from '../generique/dish-card/dish-card.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  reservations: Reservation[];

  constructor(public dialog: MatDialog, private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.getReservations().subscribe((res) => {
      console.log(res);
      this.reservations = res;
    })
  }

  openDialog(plat): void {
    const dialogRef = this.dialog.open(OrderInfoComponent, {
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
