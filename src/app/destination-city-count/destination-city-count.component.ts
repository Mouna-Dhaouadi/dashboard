import { Component, OnInit } from '@angular/core';
import { showValue } from '../synapse';
import {HttpserviceService} from '../httpservice.service';
import { ElementRef, ViewChild } from '@angular/core';
import { chart } from  'highcharts';
import * as Highcharts from 'highcharts';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-destination-city-count',
  templateUrl: './destination-city-count.component.html',
  styleUrls: ['./destination-city-count.component.css']
})
export class DestinationCityCountComponent implements OnInit {

  @ViewChild('chartTarget') 
  chartTarget: ElementRef;

  title = 'Destination City Count';
  value = 'our city is in top 50 => we need to improve our security \n \
           - our city is in last 50 => we\'re good \n \
           - i can\'t open a dataCenter in a frequently targeted / vulnerable / poor infrastructure city  '
  chart: Highcharts.ChartObject;
  
  ngAfterViewInit(){
    const options: Highcharts.Options = {
      chart: {
        type: 'pie'
      },
     
      title: {
        text: 'Destination City Count'
      },
      xAxis: {
        title: {text: 'Destination City'},
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
      name: 'Destination City Count',
      data:data
    });   
  }

  destinationCityCount = [];

  constructor(private http:HttpserviceService  ) {
    
    
  }
  
  ngOnInit() {
    const returnFunc = showValue();

    this.http.getData('/DestinationCityCount').
    then(res => {this.destinationCityCount = res;
      var index:any;
      var series = [];
      var n:number = 0;

      for(index in this.destinationCityCount) {
        series.push([this.destinationCityCount[index].info, +this.destinationCityCount[index].count]) 
     }
      this.addSeries(series);

    });
  
  }

}








