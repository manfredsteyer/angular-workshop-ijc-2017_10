import { FlightResolver } from './flight-edit/flight.resolver';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

import { Routes } from '@angular/router';


export const FLIGHT_ROUTES: Routes = [
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    },
    {
        path: 'flight-edit/:id',
        component: FlightEditComponent,
        resolve: {
            'flight': FlightResolver
        }
    }
]