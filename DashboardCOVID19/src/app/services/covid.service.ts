import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { CovidInfoModel } from '../models/covid-info.model';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(public http: HttpClient) { }

  getInfoByCountry(country: String): Observable<CovidInfoModel> {
    return this.http.get(
      `https://cors-anywhere.herokuapp.com/https://covid19-api.weedmark.systems/api/v1/stats?country=${country}`
     ).pipe(
      map((result: any) => {
          console.log('respuesta info COVID: ', result);
          return result.data
      }),
      finalize(() => {
          // this._loggedIn.next(true);
      })
    );
  };

}
