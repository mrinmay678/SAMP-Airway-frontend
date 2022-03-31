import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { ListingComponent } from './listing/listing.component';
import { PassengerComponent } from './passenger/passenger.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {
    path: '',
    component: ListingComponent
  },
  {
    path: 'flight/:id',
    component: FlightsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'passenger',
    component: PassengerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
