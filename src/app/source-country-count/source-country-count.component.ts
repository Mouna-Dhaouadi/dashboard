import { Component, OnInit } from '@angular/core';
import {HttpserviceService} from '../httpservice.service';

@Component({
  selector: 'app-source-country-count',
  templateUrl: './source-country-count.component.html',
  styleUrls: ['./source-country-count.component.css']
})
export class SourceCountryCountComponent implements OnInit {

  sourceCountryCount = [];

  constructor(private http:HttpserviceService  ) {
    
    
  }
  
  ngOnInit() {

    this.http.getData('/sourceCountryCount').
    then(res => {this.sourceCountryCount = res;
    });
  }


}
