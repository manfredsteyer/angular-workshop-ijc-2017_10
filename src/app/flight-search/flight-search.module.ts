import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, SharedModule
  ],
  declarations: [
    FlightSearchComponent
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }