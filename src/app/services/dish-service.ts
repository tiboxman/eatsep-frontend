import { Plat, PlatDate, Reservation } from './../models/plat.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable()
export class DishService {
  constructor(private http: HttpClient) { }

  getDishes(): Observable<PlatDate[]> {
    return this.http.get(environment.api + '/dishDates').pipe(
      map(res  => {
          console.log(res);
          return res['dishDates'] as PlatDate[];
      }));
      // .map(res => res.json());
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get(environment.api + '/reservations').pipe(
      map(res  => {
          console.log(res);
          return res['reservations'] as Reservation[];
      }));
      // .map(res => res.json());
  }

  createDishDate(dishDate, userId) {
    return this.http.post(environment.api + '/reservations', {'dishDate': dishDate.id , 'user': userId, "isAccepted": false})
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
