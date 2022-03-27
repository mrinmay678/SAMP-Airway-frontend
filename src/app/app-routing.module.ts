import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  {
    path: '',
    component: ListingComponent
  },
  {
    path: 'flight/:id',
    component: FlightsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListingComponent, FlightsComponent];