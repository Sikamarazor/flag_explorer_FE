import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { OperationsService } from '../../services/operations.service';
import { catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  countriesData: any[] = [];

  constructor(private operations: OperationsService) {

  }

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.operations.getCountries().pipe(
      catchError(error => {
        console.error('Failed to load countries:', error);
        // You can show a toast or fallback UI here
        return of([]); // Return empty array or a fallback value
      })
    ).subscribe((data: any) => {
      console.log('Data:', data);
      this.countriesData = data;
    });
  }
}
