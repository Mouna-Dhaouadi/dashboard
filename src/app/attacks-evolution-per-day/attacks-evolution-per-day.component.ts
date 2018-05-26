import { Component, OnInit } from '@angular/core';
import { showValue } from '../synapse';
import {HttpserviceService} from '../httpservice.service';
import { ElementRef, ViewChild } from '@angular/core';
import { chart } from  'highcharts';
import * as Highcharts from 'highcharts';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-attacks-evolution-per-day',
  templateUrl: './attacks-evolution-per-day.component.html',
  styleUrls: ['./attacks-evolution-per-day.component.css']
})
export class AttacksEvolutionPerDayComponent implements OnInit {

  attacksEvolutionPerDay = [];

  @ViewChild('chartTarget') 
  chartTarget: ElementRef;

  chart: Highcharts.ChartObject;
  
  ngAfterViewInit(){
    const options: Highcharts.Options = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Attack Evolution Per Day'
      },
      xAxis: {
        title: {text: 'Days'},
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
      name: 'Attacks Evolution Per Day',
      data:data
    });   
  }

  constructor(private http:HttpserviceService  ) {
    
    
  }
  
  ngOnInit() {

    const returnFunc = showValue();

    this.http.getData('/AttacksEvolutionPerDay').
    then(res => {this.attacksEvolutionPerDay = res;
      var index:any;
      var series = [];
      var n:number = 0;

      for(index in this.attacksEvolutionPerDay) {
        series.push([this.attacksEvolutionPerDay[index].info, +this.attacksEvolutionPerDay[index].count]) 
     }
      this.addSeries(series);

    });
  }

}








