import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { OperationsService } from '../../services/operations.service';
import { catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DetailComponent } from "../detail/detail.component";
import { Country } from '../../models/country.model';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    CommonModule,
    MatPaginatorModule,
    DetailComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  countriesData: Country[] = [];

  selectedCountry!: Country;

  showDetail: boolean = false;

  pagedCountries: Country[] = [];
  
  pageSize: number = 10;
  pageIndex: number = 0;

  constructor(private operations: OperationsService
  ) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  // Loads the list of countries from the API via the OperationsService.
  // Applies error handling to catch and respond to any request failures.
  loadCountries() {
    this.operations.getCountries().pipe(
      catchError(error => {
        console.error('Failed to load countries:', error); // Log error for debugging.
       
        return of([]); // Return an empty array as fallback to prevent app crash.
      })
    ).subscribe((data: any) => {
      console.log('Data:', data); // Log fetched data.
      this.countriesData = data; // Save the full list of countries.

      this.updatePagedData(); // Initialize paginated data for display.
    });
  }

  // Called when a country card is clicked.
  // Sets the selected country and displays the detail view.
  viewCountry(item: Country) {

    this.selectedCountry = item; // Stores the selected country.
    this.showDetail = true; // Switches the view to the detail component.
  }

  // Triggered by the child detail component when the user goes back.
  // Hides the detail view and shows the list again.
  detailEvent(): void {
    this.showDetail = false;
  }

  // Called when the user interacts with the paginator (e.g., changes page or page size).
  // Updates the current page index and size, then refreshes the paged data.
  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex; // Update current page.
    this.pageSize = event.pageSize;   // Update items per page.
    this.updatePagedData();           // Refresh the paged list of countries.
  }

  // Updates the list of countries to be displayed based on the current page.
  // This ensures only the current slice of countries is shown per page.
  updatePagedData(): void {
    const start = this.pageIndex * this.pageSize; // Calculate start index of the current page.
    const end = start + this.pageSize;            // Calculate end index of the current page.
    this.pagedCountries = this.countriesData.slice(start, end); // Get the slice for current page.
  }
}
