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
  filteredDishes: PlatDate[] = [];
  currentDate = new Date();
  days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  month = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

  constructor(public dialog: MatDialog) {
   }

  ngOnInit(): void {
    // this.filteredDishes = this.dishes.filter(x => x.date === this.currentDate);
    console.log(this.dishes);
  }

  OrderDis(plat): void {
    const dialogRef = this.dialog.open(OrderDishComponent, {
    hasBackdrop: true,
      maxWidth: '800px',
      maxHeight: '800px',
      data: plat
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('ordered');
    }, err => {
      console.log('closed')
    });
  }


  nextDate() {
    if (this.currentDate.getDay() + 1 === 5) {
      this.currentDate.setDate(this.currentDate.getDate() + 3);
    } else  {
      this.currentDate.setDate(this.currentDate.getDate() + 1);
    }
  }

  previousDate() {
    if (this.currentDate.getDay() - 1 === -1) {
      this.currentDate.setDate(this.currentDate.getDate() - 3);
    } else  {
      this.currentDate.setDate(this.currentDate.getDate() - 1);

    }

  }

  getDate() {
    let str = '';
    str += this.days[this.currentDate.getDay()] + ' ' + this.currentDate.getDate() + ' ' + this.month[this.currentDate.getMonth()];
    return str;
  }


}
