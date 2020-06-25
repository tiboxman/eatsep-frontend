import { Reservation } from './../../../models/plat.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent implements OnInit {

  @Input() reservation: Reservation;

  constructor() { }

  ngOnInit(): void {
  }

}
