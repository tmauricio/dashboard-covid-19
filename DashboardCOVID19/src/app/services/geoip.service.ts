import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { GeolocationModel } from '../models/geolocation.model';

@Injectable({
  providedIn: 'root'
})
export class GeoipService {

  constructor(public http: HttpClient) { }


  getInfoCountry(): Observable<GeolocationModel> {
    return this.http.get(`https://freegeoip.app/json/8.8.8.8`).pipe(
      tap((result: GeolocationModel) => {
          console.log('respuesta de servicio: ', result);
      }),
      finalize(() => {
          // this._loggedIn.next(true);
      })
    );
  }

}
