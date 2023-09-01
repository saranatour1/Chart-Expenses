import { Component, Input } from '@angular/core';
import { DailyData } from '../data.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @Input() inputData: DailyData[];
  monthlyTotal:number=478.33;
  lastMonthPercent:string= "2.4%";
  constructor(){}
  getMaxAmountItem(): DailyData | undefined {
    if (!this.inputData || this.inputData.length === 0) {
      return undefined; // Return undefined if inputData is empty
    }
    
    return this.inputData.reduce((maxItem, currentItem) => {
      return currentItem.amount > maxItem.amount ? currentItem : maxItem;
    }, this.inputData[0]);
  }
  
}
