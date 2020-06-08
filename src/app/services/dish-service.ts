import { Plat } from './../models/plat.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable()
export class DishService {
  constructor(private http: HttpClient) { }

  getDishes() {
    return this.http.get(environment.api + '/dishes')
      // .map(res => res.json());
  }

  createDish(dish) {
    return this.http.post(environment.api + '/dishes', dish)
      // .map(res => res.json());
  }

  updateDish(todo) {
    return this.http.put(environment.api + '/dishes', todo)
      // .map(res => res.json());
  }

  deleteDish(todo) {
    return this.http.delete(environment.api + '/dishes/' + todo.id);
  }
}
