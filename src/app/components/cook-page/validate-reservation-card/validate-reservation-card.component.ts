import { Reservation } from './../../../models/plat.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-validate-reservation-card',
  templateUrl: './validate-reservation-card.component.html',
  styleUrls: ['./validate-reservation-card.component.scss']
})
export class ValidateReservationCardComponent implements OnInit {

  @Input() reservation: Reservation;

  constructor() { }

  ngOnInit(): void {
  }

}
