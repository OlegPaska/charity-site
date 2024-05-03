import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { PickupsComponent } from './components/pickups/pickups.component';
import { DonorsComponent } from './components/donors/donors.component';
import { DonorDetailsComponent } from './components/donor-details/donor-details.component';
import { MilitaryAidComponent } from './components/military-aid/military-aid.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'trip-details', component: TripDetailsComponent },
  { path: 'pickups', component: PickupsComponent },
  { path: 'donors', component: DonorsComponent },
  { path: 'donor-details', component: DonorDetailsComponent },
  { path: 'military-aid', component: MilitaryAidComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
