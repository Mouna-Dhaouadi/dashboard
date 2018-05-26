import { Component, OnInit } from '@angular/core';
import {HttpserviceService} from '../httpservice.service';

@Component({
  selector: 'app-attacks-evolution-per-day',
  templateUrl: './attacks-evolution-per-day.component.html',
  styleUrls: ['./attacks-evolution-per-day.component.css']
})
export class AttacksEvolutionPerDayComponent implements OnInit {

  attacksEvolutionPerDay = [];

  constructor(private http:HttpserviceService  ) {
    
    
  }
  
  ngOnInit() {

    this.http.getData('/AttacksEvolutionPerDay').
    then(res => {this.attacksEvolutionPerDay = res;
    });
  }

}
