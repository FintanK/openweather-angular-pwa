import { Component, OnInit } from '@angular/core';
import { GeolocationService } from './services/geolocation.service';
import { OpenweatherService } from './services/openweather.service';
import { NgProgress } from "@ngx-progressbar/core";

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.less' ]
} )
export class AppComponent implements OnInit {

  currentWeather: any;
  locationName: string;

  constructor(
    private geolocationService: GeolocationService,
    private openWeatherService: OpenweatherService,
    private ngProgress: NgProgress) {
  }

  ngOnInit() {

    this.ngProgress.ref('progressBar').start();

    this.geolocationService.findMe().getCurrentPosition( (position: Position) => {
      this.openWeatherService.fetchFiveDayForecast( position, 'metric' ).subscribe(
        (foreCast) => {
          this.locationName = foreCast.city.name;

          this.openWeatherService.fetchCurrentWeather( foreCast.city.name, foreCast.city.country, 'metric' ).subscribe(
            (currentWeather) => {
              this.currentWeather = currentWeather;
              this.ngProgress.ref('progressBar').complete();
            },
            (error) => {
              console.log( error );
              this.ngProgress.ref('progressBar').complete();
            }
          );
        },
        (error) => {
          console.log( error );
          this.ngProgress.ref('progressBar').complete();
        }
      );

    } );
  }

  fetchCurrentWeatherIconCode() {
    return this.currentWeather.weather[0].icon;
  }

  getOutlookDescription(): string {
    return this.currentWeather.weather[0].description.charAt(0).toUpperCase() + this.currentWeather.weather[0].description.slice(1);
  }
}
