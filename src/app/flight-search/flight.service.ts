import { Flight } from '../entities/flight';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FlightService {

    constructor(private http: HttpClient) { 
        console.debug('Best wishes from the Service!');
    }

    flights: Flight[] = [];

    load(from: string, to: string): void {
        this.find(from, to).subscribe(
            flights => { this.flights = flights },
            err => console.error('Error loading flights', err)
        );
    }

    find(from: string, to: string): Observable<Flight[]> {
        
        let url = 'http://www.angular.at/api/flight';
        let params = new HttpParams()
                          .set('from', from)
                          .set('to', to);
    
        let headers = new HttpHeaders()
                          .set('Accept', 'application/json');
    
        return this.http.get<Flight[]>(url, { headers, params });

    }


    findById(id: string): Observable<Flight> {
        
        let url = 'http://www.angular.at/api/flight';
        let params = new HttpParams()
                          .set('id', id);
    
        let headers = new HttpHeaders()
                          .set('Accept', 'application/json');
    
        return this.http.get<Flight>(url, { headers, params });

    }


    save(flight: Flight): Observable<Flight> {
        let url = 'http://www.angular.at/api/flight';
        return this.http.post<Flight>(url, flight);
    }

}