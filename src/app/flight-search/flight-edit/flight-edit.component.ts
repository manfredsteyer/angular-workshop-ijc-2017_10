import { Flight } from '../../entities/flight';
import { FlightService } from '../flight.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  id: string;
  showDetails: string;
  flight: Flight;
  error: string;
  
  constructor(
    private router: ActivatedRoute,
    private flightService: FlightService) { 
  }

  ngOnInit() {
    this.router.params.subscribe( p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
      // this.load();
    });


    this.router.data.subscribe( data => {
      this.flight = data['flight'];
    })

  }

  load() {
    this.flightService.findById(this.id).subscribe(
      flight => { this.flight = flight; this.error = ''; },
      err => { this.error = 'Error loading flight!'; }
    );
  }

  save() {
    this.flightService.save(this.flight).subscribe(
      flight => { 
        this.flight = flight; 
        this.error = ''; 
        
      },
      err => { this.error = 'Error saving flight!'; }
    );
  }

}
