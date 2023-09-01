import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { ChartComponent } from './chart/chart.component';
import { DayComponent } from './day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BannerComponent,
    ChartComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
