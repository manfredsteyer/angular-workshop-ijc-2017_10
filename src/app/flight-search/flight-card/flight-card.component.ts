import { Flight } from '../../entities/flight';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { 
    console.debug('ctor', this.selected, this.item);
  }

  ngOnInit() {
    console.debug('ngOnInit', this.selected, this.item);
    // this.selectedChange.next(true);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.debug('ngOnChanges', this.selected, this.item);
    if (changes['selected']) {
      console.debug('\t selected changed');
    }
    if (changes['item']) {
      console.debug('\t item changed');
    }
  }

  public ngOnDestroy(): void {
    console.debug('ngOnDestroy', this.selected, this.item);
  }


  select() {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(false);
  }


}
