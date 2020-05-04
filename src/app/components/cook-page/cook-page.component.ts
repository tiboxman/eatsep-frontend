import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateDishInfoComponent } from './create-dish-info/create-dish-info.component';
import { CreateDishComponent } from './create-dish/create-dish.component';
import { PlanDishInfoComponent } from './plan-dish-info/plan-dish-info.component';
import { PlanDishComponent } from './plan-dish/plan-dish.component';

@Component({
  selector: 'app-cook-page',
  templateUrl: './cook-page.component.html',
  styleUrls: ['./cook-page.component.scss']
})
export class CookPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createDishInfo(): void {
    const dialogRef = this.dialog.open(CreateDishInfoComponent, {
	  hasBackdrop: true,
      maxWidth: '800px',
      maxHeight: '800px'
      //data: {id: _id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  createDish(): void {
    const dialogRef = this.dialog.open(CreateDishComponent, {
	  hasBackdrop: true,
      maxWidth: '800px',
      maxHeight: '800px'
      //data: {id: _id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  PlanDishInfo(): void {
    const dialogRef = this.dialog.open(PlanDishInfoComponent, {
	  hasBackdrop: true,
      maxWidth: '800px',
      maxHeight: '800px'
      //data: {id: _id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  PlanDish(): void {
    const dialogRef = this.dialog.open(PlanDishComponent, {
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
