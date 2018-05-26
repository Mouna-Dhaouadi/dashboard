import { Component, OnInit } from '@angular/core';
import {HttpserviceService} from '../httpservice.service';

@Component({
  selector: 'app-destination-city-count',
  templateUrl: './destination-city-count.component.html',
  styleUrls: ['./destination-city-count.component.css']
})
export class DestinationCityCountComponent implements OnInit {

  destinationCityCount = [];

  constructor(private http:HttpserviceService  ) {
    
    
  }
  
  ngOnInit() {

    this.http.getData('/DestinationCityCount').
    then(res => {this.destinationCityCount = res;
    });
  }

}
