import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DailyData } from './data.model'; // Import the interface


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'assets/data.json';
  constructor(private http: HttpClient) { }

  fetchData(): Observable<DailyData[]> {
    return this.http.get<DailyData[]>(this.jsonUrl);
  }
}
