import { Reservation, Plat } from './../../../models/plat.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent implements OnInit {

  @Input() plat: Plat;
  @Input() reservation: Reservation;

  constructor() {
   }

  ngOnInit(): void {
  }

}
