import { Component, OnInit } from '@angular/core';
import {HttpserviceService} from '../httpservice.service';

@Component({
  selector: 'app-destination-country-count',
  templateUrl: './destination-country-count.component.html',
  styleUrls: ['./destination-country-count.component.css']
})
export class DestinationCountryCountComponent implements OnInit {

  destinationCountryCount = [];

  constructor(private http:HttpserviceService  ) {
    
    
  }
  
  ngOnInit() {

    this.http.getData('/destinationCountryCount').
    then(res => {this.destinationCountryCount = res;
    });
  }
}
