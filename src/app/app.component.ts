import { Component, OnInit } from '@angular/core';
import { GeolocationService } from './services/geolocation.service';
import { OpenweatherService } from './services/openweather.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.less' ]
} )
export class AppComponent implements OnInit {

  currentWeather: any;
  locationName: string;

  constructor(private geolocationService: GeolocationService, private openWeatherService: OpenweatherService) {
  }

  ngOnInit() {
    this.geolocationService.findMe().getCurrentPosition( (position: Position) => {
      this.position = position;
      console.log( this.position );

      this.openWeatherService.fetchFiveDayForecast( position, 'metric' ).subscribe(
        (foreCast) => {
          console.log( foreCast );
          this.locationName = foreCast.city.name;
          this.forecast = foreCast.list;

          this.openWeatherService.fetchCurrentWeather( foreCast.city.name, foreCast.city.country, 'metric' ).subscribe(
            (currentWeather) => {
              this.currentWeather = currentWeather;
              console.log( currentWeather );
            },
            (error) => {
              console.log( error );
            }
          );

        },
        (error) => {
          console.log( error );
        }
      );

    } );
  }

  fetchCurrentWeatherIconCode() {
    return this.currentWeather.weather[0].icon;
  }

  getOutlookDescription(): string {
    return this.currentWeather.weather[0].description.charAt(0).toUpperCase() + this.currentWeather.weather[0].description.slice(1)
  }
}
