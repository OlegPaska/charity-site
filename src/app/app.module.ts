import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalloutModule } from '@coreui/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripsComponent } from './components/trips/trips.component';
import { TableComponent } from './components/table/table.component';
import { HomeComponent } from './components/home/home.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { PickupsComponent } from './components/pickups/pickups.component';
import { DonorsComponent } from './components/donors/donors.component';
import { DonorDetailsComponent } from './components/donor-details/donor-details.component';
import { MilitaryAidComponent } from './components/military-aid/military-aid.component';

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    TableComponent,
    HomeComponent,
    TripDetailsComponent,
    PickupsComponent,
    DonorsComponent,
    DonorDetailsComponent,
    MilitaryAidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalloutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
