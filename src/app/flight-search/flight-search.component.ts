import { FlightService } from './flight.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Flight } from '../entities/flight';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
//  providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  
  get flights() {  // *ngIf="let f of flights"
    return this.flightService.flights;
  }

  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "5": true
  };

  constructor(private flightService: FlightService) { 
    console.debug('Best wishes from the Component!');
  }

  ngOnInit() {
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  search() {
    
    this
      .flightService
      .load(this.from, this.to);

    

  }

}
