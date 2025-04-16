import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  baseApiLink: string = 'https://restcountries.com/v3.1/'; // Api base url
  constructor(private http: HttpClient) { }

  // Sends an HTTP GET request to fetch all countries from the REST Countries API.
  // Returns an observable containing the list of countries.
  getCountries() {
    return this.http.get(this.baseApiLink + 'all');
  }
}
