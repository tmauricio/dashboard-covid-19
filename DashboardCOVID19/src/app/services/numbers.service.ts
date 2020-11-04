import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/internal/operators/finalize';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  constructor(public http: HttpClient) { }

  getSentence(): Observable<String> {

    
    return this.http.get(
        'http://numbersapi.com/random/trivia',
        { responseType: 'text' }
    ).pipe(
      tap((result: String) => {
          console.log('respuesta de servicio: ', result);
          return result;
      }),
      finalize(() => {
          // this._loggedIn.next(true);
      })
    );
  }
}
