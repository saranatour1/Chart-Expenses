import { Component,OnInit } from '@angular/core';
import { DataService } from './data.service'; // Import the service
import { DailyData } from './data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-tour-of-heroes';
  data:DailyData[] =[];
  balance:number = 921.48;

  constructor(private dataService: DataService) {
   }

  ngOnInit() {
    this.dataService.fetchData().subscribe(data => {
      this.data = data; 
      this.doSomethingWithData()
    });

  }

  doSomethingWithData() {
    let sum:number =0
    console.log('Data:', this.data.map(item => sum+=item.amount));
    console.log(sum)
  }

    
}
