import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component'
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AttacksCountComponent } from './attacks-count/attacks-count.component';
import { Http } from '@angular/http/src/http';
import { HttpserviceService } from './httpservice.service';
import { AttacksEvolutionPerDayComponent } from './attacks-evolution-per-day/attacks-evolution-per-day.component';
import { DestinationCityCountComponent } from './destination-city-count/destination-city-count.component';
import { SourceCityCountComponent } from './source-city-count/source-city-count.component';
import { SourceCountryCountComponent } from './source-country-count/source-country-count.component';
import { DestinationCountryCountComponent } from './destination-country-count/destination-country-count.component';


const appRoutes: Routes = [

  {
    path: 'batch',
    component: AppComponent,
    data: { title: 'Attacks Statistics' }
  },
  
  { path: '',
    redirectTo: '/batch',
    pathMatch: 'full'
  },
  
 
];


@NgModule({
  declarations: [
    AppComponent,
    AttacksCountComponent,
    AttacksEvolutionPerDayComponent,
    DestinationCityCountComponent,
    SourceCityCountComponent,
    SourceCountryCountComponent,
    DestinationCountryCountComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers:[
    HttpserviceService
  ]
,
  bootstrap: [AppComponent]
})
export class AppModule { }
