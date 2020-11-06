import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { Country, CovidInfoModel } from '../models/covid-info.model';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(public http: HttpClient) { }

  getInfoByCountry(country: string): Observable<CovidInfoModel> {
    return this.http.get(`http://localhost:3000/api/getInfoCovidByCountry/${country}`).pipe(
      map((result: any) => {
          console.log('respuesta info COVID: ', result);
          return result.data
      })
    );
  };

}
