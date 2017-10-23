import { FlightResolver } from './flight-edit/flight.resolver';
import { FlightService } from './flight.service';
import { FLIGHT_ROUTES } from './flight-search.routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    SharedModule,
    RouterModule.forChild(FLIGHT_ROUTES)
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent
  ],
  providers: [
    FlightResolver,
    FlightService
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }