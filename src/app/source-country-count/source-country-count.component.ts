
import { Component, OnInit } from '@angular/core';
import { showValue } from '../synapse';
import {HttpserviceService} from '../httpservice.service';
import { ElementRef, ViewChild } from '@angular/core';
import { chart } from  'highcharts';
import * as Highcharts from 'highcharts';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-source-country-count',
  templateUrl: './source-country-count.component.html',
  styleUrls: ['./source-country-count.component.css']
})
export class SourceCountryCountComponent implements OnInit {

  sourceCountryCount = [];

  @ViewChild('chartTarget') 
  chartTarget: ElementRef;

  chart: Highcharts.ChartObject;
  
  ngAfterViewInit(){
    const options: Highcharts.Options = {
      chart: {
        type: 'scatter'
      },
      title: {
        text: 'Source Country Count'
      },
      xAxis: {
        title: {text: 'Source Country'},
      type: "category"
      },
      yAxis: {
        title: {
          text: 'Count'
        }
      },
      series: []
    };
  

    this.chart = chart(this.chartTarget.nativeElement, options);

  }

  addSeries(data){
    this.chart.addSeries({
      name: 'Source Country Count',
      data:data
    });   
  }

  constructor(private http:HttpserviceService  ) {
    
    
  }
  
  ngOnInit() {
    const returnFunc = showValue();

    this.http.getData('/sourceCountryCount').
    then(res => {this.sourceCountryCount = res;
      var index:any;
      var series = [];
      var n:number = 0;
  
      for(index in this.sourceCountryCount) {
        series.push([this.sourceCountryCount[index].info, +this.sourceCountryCount[index].count]) 
     }
      this.addSeries(series);
      
    });
  }


}



