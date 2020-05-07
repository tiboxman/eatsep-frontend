import { DishService } from './../../services/dish-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(private dishService: DishService) {
      this.dishService.getDishes().subscribe((res) => {
        console.log(res);
      })
   }

  ngOnInit(): void {
  }


}
