import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { OperationsService } from '../../services/operations.service';
import { CommonModule } from '@angular/common';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-detail',
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  @Input() countryData!: Country;

  @Output() triggerEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
    
  }

  ngOnInit(): void {
    console.log('ngOnInit called');

    console.log('Country data ', this.countryData);
  }

  goBack() : void {
    this.triggerEvent.emit('back');
  }

}
