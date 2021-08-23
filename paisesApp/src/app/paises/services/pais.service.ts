import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Country } from './../interfaces/pais.interface';
@Injectable({
  providedIn: 'root'
})
export class PaisService {
  public apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient) { }


  buscarPais(terrmino: string):Observable<Country[]> {
    const url =`${this.apiUrl}/name/${terrmino}`
    return this.http.get<Country[]>(url)
            .pipe(
              catchError(err => of ([]))
            );
  }

}
