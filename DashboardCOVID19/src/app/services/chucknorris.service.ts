import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisService {

  constructor(public http: HttpClient) { }

  getSentence(): Observable<String> {
    return this.http.get('https://api.chucknorris.io/jokes/random').pipe(
      map((result: any) => {
          console.log('respuesta de servicio: ', result);
          return result.value;
      }),
      finalize(() => {
          // this._loggedIn.next(true);
      })
    );
  }
  
}
