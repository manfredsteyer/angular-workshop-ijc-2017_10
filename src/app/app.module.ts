import { APP_ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { FlightBookingModule } from './flight-search/flight-search.module';
import { CityPipe } from './shared/city.pipe';
import { FlightService } from './flight-search/flight.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlightBookingModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent
],
  providers: [
    // { provide: FlightService, useClass: FlightService }
    // FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
