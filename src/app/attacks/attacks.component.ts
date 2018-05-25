import {Component} from '@angular/core';
import { Http } from '@angular/http';



@Component(
    {
        selector:'attacks',
        templateUrl:'./attacks.component.html'
    }
)
export class AttacksComponent{

attackCount=[];
attacksEvolutionPerDay = [];
destinationCityCount = [];
sourceCityCount = [];
destinationCountryCount = [];
sourceCountryCount = [];

url = 'http://localhost:3000/batch/';

constructor(private http:Http)
{

  http.get(this.url + 'attackCount').subscribe(response => {
     this.attackCount=response.json();
 });

 http.get(this.url + 'attacksEvolutionPerDay').subscribe(response => {
    this.attacksEvolutionPerDay=response.json();
});

http.get(this.url + 'destinationCityCount').subscribe(response => {
    this.destinationCityCount=response.json();
});

http.get(this.url + 'sourceCityCount').subscribe(response => {
    this.sourceCityCount=response.json();
});
  
http.get(this.url + 'destinationCountryCount').subscribe(response => {
    this.destinationCountryCount=response.json();
});

http.get(this.url + 'sourceCountryCount').subscribe(response => {
    this.sourceCountryCount=response.json();
});

}

}