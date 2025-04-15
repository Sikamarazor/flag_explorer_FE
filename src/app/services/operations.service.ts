import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  baseApiLink: string = 'https://restcountries.com/v3.1/';
  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(this.baseApiLink + 'all');
  }
}
