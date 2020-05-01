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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(OrderInfoComponent, {
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
