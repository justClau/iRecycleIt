import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD1csME-8N42m83P-3GHRp6Oq2cKMyEKYk"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
