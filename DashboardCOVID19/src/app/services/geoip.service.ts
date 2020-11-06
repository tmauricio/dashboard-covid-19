import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { GeolocationModel } from '../models/geolocation.model';

@Injectable({
  providedIn: 'root'
})
export class GeoipService {

  constructor(public http: HttpClient) { }

  getInfoCountry(): Observable<GeolocationModel> {
    return this.http.get('http://localhost:3000/api/getMyCountry').pipe(
      tap((result: GeolocationModel) => {
          console.log('getInfoCountry: ', result);
      }),
      finalize(() => {
          // this._loggedIn.next(true);
      })
    );
  }

  getListCountries(): Observable<any> {
    return this.http.get(
      'http://localhost:3000/api/getAllCountries').pipe(
      map((result: any) => {
          console.log('respuesta info countries: ', result);
          return result.map(value => ({ name: value.name, capital: value.capital, currency: value.currencies, languages: value.languages }));
      }),
      finalize(() => {
          // this._loggedIn.next(true);
      })
    );
  }
  

}
