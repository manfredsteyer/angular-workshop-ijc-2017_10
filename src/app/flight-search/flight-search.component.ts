import { FlightService } from './flight.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Flight } from '../entities/flight';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

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
      .find(this.from, this.to)
      .subscribe(
        flights => {
          this.flights = flights;
        },
        err => {
          console.error('Error during loading flights', err);
        }
      )

  }

}
