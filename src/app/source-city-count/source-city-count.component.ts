import { Component, OnInit } from '@angular/core';
import { showValue } from '../synapse';
import {HttpserviceService} from '../httpservice.service';
import { ElementRef, ViewChild } from '@angular/core';
import { chart } from  'highcharts';
import * as Highcharts from 'highcharts';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-source-city-count',
  templateUrl: './source-city-count.component.html',
  styleUrls: ['./source-city-count.component.css']
})
export class SourceCityCountComponent implements OnInit {

  sourceCityCount = [];
  title = 'Source City Count';
  value = 'if in the top 10 in attacks, city proabaly has very good hackers, good security engineer \n \
    BigCompanies: search for competent hackers thereand offer them empoyment \n \
    New Businesses: review your business model and avoid messing with these people\'s interest, they can hack your system \n \
    government: hacking people in not moral, should review ethics and moral values => changes schools systems  \n \
'

  @ViewChild('chartTarget') 
  chartTarget: ElementRef;

  chart: Highcharts.ChartObject;
  
  ngAfterViewInit(){
    const options: Highcharts.Options = {
      chart: {
        type: 'scatter'
      },
      colors:['#f44336'],
      title: {
        text: 'Source City Count'
      },
      xAxis: {
        title: {text: 'Source City'},
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
      name: 'Source City Count',
      data:data
    });   
  }



  constructor(private http:HttpserviceService  ) {
    
    
  }
  
  ngOnInit() {

    const returnFunc = showValue();

    this.http.getData('/SourceCityCount').
    then(res => {this.sourceCityCount = res;

    var index:any;
    var series = [];
    var n:number = 0;

    for(index in this.sourceCityCount) {
      series.push([this.sourceCityCount[index].info, +this.sourceCityCount[index].count]) 
   }
    this.addSeries(series);
    });
  }


}
