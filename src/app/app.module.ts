import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileModule } from './profile/profile.module';
import { FlightsModule } from './flights/flights.module';
import { ListingModule } from './listing/listing.module';
import { PassengerComponent } from './passenger/passenger.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent
  ],
  imports: [
    BrowserModule,
    ListingModule,
    ProfileModule,
    FlightsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
