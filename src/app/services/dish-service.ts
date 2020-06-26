import { Plat, PlatDate, Reservation } from './../models/plat.model';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
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

  getD(): Observable<Plat[]> {
    return this.http.get(environment.api + '/dishes').pipe(
      map(res  => {
          console.log(res);
          return res['dishes'] as Plat[];
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

  createDishDate(dishDate, userId, comment) {
    return this.http.post(environment.api + '/reservations', {'dishDate': dishDate.id , 'user': userId, "comment": comment, "isAccepted": false})
      // .map(res => res.json());
  }

  // createDish(dish) {
  //   return this.http.post(environment.api + '/dishes', dish)
  //     // .map(res => res.json());
  // }

  updateDish(todo) {
    return this.http.put(environment.api + '/dishes', todo)
      // .map(res => res.json());
  }

  uploadDish(file: File, dish: Plat): Observable<HttpEvent<any>> {
    const dishUploadUrl = environment.api + '/dishes';
    const formData = new FormData();
    // formData.append('document', JSON.stringify(document));
    formData.append('file', file);
    formData.append('dish', JSON.stringify(dish));
    // document.fileData = formData;
    const httpOptions = {
      // headers: new HttpHeaders({'Content-Type': 'multipart/form-data'}),
      // body: {document: formData }
    };

    const req = new HttpRequest('POST', dishUploadUrl, formData, httpOptions);
    return this.http.request(req);
  }

  deleteDish(todo) {
    return this.http.delete(environment.api + '/dishes/' + todo.id);
  }
}
