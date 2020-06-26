import { Plat, PlatDate } from './../../models/plat.model';
import { DishService } from './../../services/dish-service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  dishes: PlatDate[];
  currentDate;
  dateEvent: BehaviorSubject<Date>;

  constructor(private dishService: DishService) {


   }

  ngOnInit(): void {
    this.dishService.getDishes().subscribe((res) => {
      this.dishes = res;
      console.log(this.dishes);
    })
  }



}
