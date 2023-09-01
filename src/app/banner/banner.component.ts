import { Component, Input } from '@angular/core';
// import logo from 'assets/logo.svg'; 

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() inputData: any;

  
  constructor(){

  }

  ngOnInit(){
    this.doSomething()
  }
  doSomething(){
    console.log(this.inputData);
  }
}
