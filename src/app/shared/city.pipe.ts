import { FlightService } from '../flight-search/flight.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  constructor(private flightService: FlightService) {
    console.debug('flightService', flightService);
  }

  transform(value: string, fmt: 'short' | 'long'): string {
    
    let short, long;
    
    switch(value) {
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel';
        break;
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      default: 
        // short = long = 'ROM';
        short = long = value;
    }

    if (fmt == 'short') {
      return short;
    }

    return long;

  }

}