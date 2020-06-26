import { Reservation, Plat } from './../../../models/plat.model';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss'],

})
export class DishCardComponent implements OnInit {

  @Input() plat: Plat;
  @Input() reservation: Reservation;
  imagePath = '';
  constructor(private sanitization: DomSanitizer) {
   }

  ngOnInit(): void {
    if (this.plat != undefined)
      this.imagePath = 'http://127.0.0.1:8887/' + this.plat.images ;
  }
   getImageUrl() {
     return  this.sanitization.bypassSecurityTrustStyle(`url(${this.imagePath})`);
   }
}
