import { Component, OnInit } from '@angular/core';
import { DishService } from './../../services/dish-service';
import { Reservation, Plat } from './../../models/plat.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ValidateReservationComponent } from './validate-reservation/validate-reservation.component';
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

  reservations: Reservation[];
  plats: Plat[];

  constructor(public dialog: MatDialog, private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.getReservations().subscribe((res) => {
      console.log(res);
      this.reservations = res;
    })
    this.dishService.getD().subscribe((res) => {
      console.log(res);
      this.plats = res;
    })
  }

  validateReservation(): void {
    const dialogRef = this.dialog.open(ValidateReservationComponent, {
	  hasBackdrop: true,
      maxWidth: '800px',
      maxHeight: '800px'
      //data: {id: _id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
