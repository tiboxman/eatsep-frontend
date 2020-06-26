import { DishService } from './../../../services/dish-service';
import { Reservation } from './../../../models/plat.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Plat } from 'src/app/models/plat.model';

@Component({
  selector: 'app-validate-reservation',
  templateUrl: './validate-reservation.component.html',
  styleUrls: ['./validate-reservation.component.scss']
})
export class ValidateReservationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ValidateReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reservation, private dishService: DishService) { }

  ngOnInit(): void {
  }

  saveDish() {
    this.dishService.updateDishDate(this.data.id).subscribe(res => {
      console.log(res);
    });
  }
}
