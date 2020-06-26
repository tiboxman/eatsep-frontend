import { Plat } from './../../../models/plat.model';
import { DishService } from './../../../services/dish-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CATEGORIES } from '../../../models/mock/categorie.mock';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.scss']
})
export class CreateDishComponent implements OnInit {
  allcat: boolean = false;
  newDish;
  file: File;
  categories = CATEGORIES;
  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.newDish = new Plat();
    this.newDish.user = "5ef21913ea8df9691c95c325";
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

  changeImage(event) {
    // console.log(event.target);
    this.file = event.target.files[0];
    console.log(this.file);
  }

  saveDish() {
       this.dishService.uploadDish(this.file, this.newDish).subscribe(res => {
      console.log(res);
    })
  }

}
