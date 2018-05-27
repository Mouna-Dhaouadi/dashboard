import { Component, OnInit } from '@angular/core';
import { showValue } from '../synapse';
import {HttpserviceService} from '../httpservice.service';
import { ElementRef, ViewChild } from '@angular/core';
import { chart } from  'highcharts';
import * as Highcharts from 'highcharts';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-destination-country-count',
  templateUrl: './destination-country-count.component.html',
  styleUrls: ['./destination-country-count.component.css']
})
export class DestinationCountryCountComponent implements OnInit {

  destinationCountryCount = [];
 title = 'Destination Country Count';
 value = '- our country is in top 50 => we need to improve our security \n \
           - our country is in last 50 => we\'re good \n \
           - i can\'t open a dataCenter in a frequently targeted / vulnerable / poor infrastructure country'
  @ViewChild('chartTarget') 
  chartTarget: ElementRef;

  chart: Highcharts.ChartObject;
  
  ngAfterViewInit(){
    const options: Highcharts.Options = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Destination Country Count'
      },
      xAxis: {
        title: {text: 'Destination Country'},
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
      name: 'Destination Country Count',
      data:data
    });   
  }



  constructor(private http:HttpserviceService  ) {  
  }
  
  ngOnInit() {

    const returnFunc = showValue();

    this.http.getData('/destinationCountryCount').
    then(res => {this.destinationCountryCount = res;
   

    var index:any;
    var series = [];
    var n:number = 0;

    for(index in this.destinationCountryCount) {
      series.push([this.destinationCountryCount[index].info, +this.destinationCountryCount[index].count]) 
   }
    this.addSeries(series);
  });
  }
}





 








