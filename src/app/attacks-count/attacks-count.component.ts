import { Component, OnInit } from '@angular/core';
import { showValue } from '../synapse';
import {HttpserviceService} from '../httpservice.service';


@Component({
  selector: 'app-attacks-count',
  templateUrl: './attacks-count.component.html',
  styleUrls: ['./attacks-count.component.css'],

})

export class AttacksCountComponent implements OnInit {

  attackCount=[];

  constructor(private http:HttpserviceService  ) {
    
    
  }
  
  ngOnInit() {

    const returnFunc = showValue();

    this.http.getData('/attackCount').
    then(res => { console.log('ok'); this.attackCount = res});
  }

  

  }


