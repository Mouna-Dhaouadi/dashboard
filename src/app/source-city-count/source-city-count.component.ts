import { Component, OnInit } from '@angular/core';
import {HttpserviceService} from '../httpservice.service';

@Component({
  selector: 'app-source-city-count',
  templateUrl: './source-city-count.component.html',
  styleUrls: ['./source-city-count.component.css']
})
export class SourceCityCountComponent implements OnInit {

  sourceCityCount = [];

  constructor(private http:HttpserviceService  ) {
    
    
  }
  
  ngOnInit() {

    this.http.getData('/SourceCityCount').
    then(res => {this.sourceCityCount = res;
    });
  }


}