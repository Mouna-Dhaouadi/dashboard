import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component'
import { AttacksComponent } from './attacks/attacks.component';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [

  {
    path: 'batch',
    component: AttacksComponent,
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
    AttacksComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
