import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from './../environments/environment';
import { MatToolbarModule } from '@angular/material';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    NavbarComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.maps_api_key
    }),
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
