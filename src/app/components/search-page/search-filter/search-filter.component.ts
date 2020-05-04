import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../../../models/mock/categorie.mock';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  allcat: boolean = false;

  categories = CATEGORIES;
  currentDate = new Date();

  days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  month = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

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

  nextDate() {
    if (this.currentDate.getDay() + 1 === 5) {
      this.currentDate.setDate(this.currentDate.getDate() + 3);
    } else  {
      this.currentDate.setDate(this.currentDate.getDate() + 1);
    }
  }

  previousDate() {
    if (this.currentDate.getDay() - 1 === -1) {
      this.currentDate.setDate(this.currentDate.getDate() - 3);
    } else  {
      this.currentDate.setDate(this.currentDate.getDate() - 1);
    }
  }

  getDate() {
    let str = '';
    str += this.days[this.currentDate.getDay()] + ' ' + this.currentDate.getDate() + ' ' + this.month[this.currentDate.getMonth()];
    return str;
  }

}
