import { Component, Input } from '@angular/core';
import { DailyData } from '../data.model';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {
  @Input() className: string;
  @Input() dayVal:DailyData;

  showTool:boolean = false;

  constructor(){}

  onHover(){
    this.showTool =true;
  }
  

}
