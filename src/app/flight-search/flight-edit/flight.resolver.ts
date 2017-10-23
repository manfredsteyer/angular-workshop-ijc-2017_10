import { FlightService } from '../flight.service';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Flight } from '../../entities/flight';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class FlightResolver implements Resolve<Flight> {

    constructor(private flightService: FlightService) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight> {
        let id = route.params['id'];
        return this.flightService.findById(id); // .delay(4000);
    }
}