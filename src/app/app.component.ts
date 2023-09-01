import { Component,OnInit } from '@angular/core';
import { DataService } from './data.service'; // Import the service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-tour-of-heroes';
  data:any;
  constructor(private dataService: DataService) {

   }


  ngOnInit() {
    this.dataService.fetchData().subscribe(data => {
      this.data = data; 
      console.log(this.data)
    });

  }


}
