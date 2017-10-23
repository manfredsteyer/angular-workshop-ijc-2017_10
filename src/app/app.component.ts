import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flight-app', // <flight-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  info = "Hello World!";
  constructor(router: Router) {
    router.events.subscribe( (e) => {
      if (e instanceof NavigationStart) {
        // TODO: Show Indicator
      }
      else if (e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError) {
        // TODO: Hide Indicator
      }
    })
  }
}
