import { Plat } from './../../../models/plat.model';
import { DishService } from './../../../services/dish-service';
import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../../../models/mock/categorie.mock';

@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.scss']
})
export class CreateDishComponent implements OnInit {
  allcat: boolean = false;

  categories = CATEGORIES;
  constructor(private dishService: DishService) { }

  ngOnInit(): void {
  }

  toggleIcon(cat: any) {
    const index = this.categories.indexOf(cat);
    this.categories[index].isActive = !this.categories[index].isActive;
  }

  toggleAllIcon() {
    this.allcat = !this.allcat;
    for(let i = 0; i < this.categories.length; i++){
      this.categories[i].isActive = this.allcat;
    }
  }

  saveDish() {
    const dish = {
      "title": "APITEST",
      "description": "test descr",
      "images": [],
      "ingredients": "test",
      "keywords": ["test1", "test2"],
      "categories": ["test1", "test2"],
      "user": "5ede46f561cccf17cc0afa8f",
      "prix": 10
    };
    this.dishService.createDish(dish).subscribe(res => {
      console.log(res);
    })
  }

}
