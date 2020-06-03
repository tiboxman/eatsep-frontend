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
  constructor() { }

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

}
