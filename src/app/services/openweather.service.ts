import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { environment } from '../../environments/environment';

@Injectable( {
  providedIn: 'root'
} )
export class OpenweatherService {

  constructor(private http: HttpClient) {
  }

  fetchCurrentWeather(cityName: string, countryCode: string, units: string): Observable<any> {
    return this.http.get( environment.openWeatherAPI + `weather?q=${cityName},${countryCode}&units=${units}` );
  }

  fetchFiveDayForecast(position: Position, units: string): Observable<any> {
    return this.http.get( environment.openWeatherAPI + `forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${units}` );
  }

}
