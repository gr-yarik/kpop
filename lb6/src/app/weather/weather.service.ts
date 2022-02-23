import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(woeid: number): Observable<any> {
    return this.http.get<any>(`/metaweather/${woeid}/`);
  }
}
