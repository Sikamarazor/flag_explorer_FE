import { Component, Input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { OperationsService } from '../../services/operations.service';
import { catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DetailComponent } from "../detail/detail.component";
import { Country } from '../../models/country.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flag-cards',
  imports: [
    MatCardModule,
    MatPaginatorModule,
    CommonModule,
    DetailComponent
],
  templateUrl: './flag-cards.component.html',
  styleUrl: './flag-cards.component.scss'
})
export class FlagCardsComponent {

  @Input() countriesData: Country[] = [];

  showDetail: boolean = false;

  selectedCountry!: Country;

  pagedCountries: Country[] = [];

  pageSize = 8;
  pageIndex = 0;

  constructor(private route: Router) {

  }

  ngOnInit() {
    console.log(this.countriesData);

    this.updatePagedData();
  }

  viewCountry(item: Country) {
    console.log('Item:', item);

    this.showDetail = true;

    this.selectedCountry = item;

  }

  detailEvent(event: any): void {
    console.log('Event:', event);

    this.showDetail = false;

  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedData();
  }

  updatePagedData(): void {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.pagedCountries = this.countriesData.slice(start, end);
  }


}
