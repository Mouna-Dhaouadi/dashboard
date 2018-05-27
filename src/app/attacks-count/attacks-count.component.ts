import { Component, OnInit } from '@angular/core';
import { showValue } from '../synapse';
import {HttpserviceService} from '../httpservice.service';
import { ElementRef, ViewChild } from '@angular/core';
import { chart } from  'highcharts';
import * as Highcharts from 'highcharts';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-attacks-count',
  templateUrl: './attacks-count.component.html',
  styleUrls: ['./attacks-count.component.css'],

})

export class AttacksCountComponent implements OnInit {

  attackCount=[];
  title = 'Attacks Count';
  value = 'Marketing: our antivirus is effective against all of the top 50 attacks'

  @ViewChild('chartTarget') 
  chartTarget: ElementRef;

  chart: Highcharts.ChartObject;
  
  ngAfterViewInit(){
    const options: Highcharts.Options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Attack Count'
      },
      xAxis: {
        title: {text: 'Attacks'},
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
      name: 'Attack Count',
      data:data
    });   
  }


  constructor(private http:HttpserviceService  ) {   }
  
  ngOnInit() {

    const returnFunc = showValue();

    this.http.getData('/attackCount').
    then(res => { 
      this.attackCount = res;
      
      var index:any;
      var series = [];
      var n:number = 0;

      for(index in this.attackCount) {
        series.push([this.attackCount[index].info, +this.attackCount[index].count]) 
     }
      this.addSeries(series);
     

});

    
  }

}




