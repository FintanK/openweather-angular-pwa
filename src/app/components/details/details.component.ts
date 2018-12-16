import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';
import { OpenweatherService } from '../../services/openweather.service';
import * as momentNs from 'moment';

const moment = momentNs;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

  forecast: Array<any>;
  position: Position;

  constructor(private geolocationService: GeolocationService, private openWeatherService: OpenweatherService) {
    this.weatherIconMappings = [];
    this.weatherIconMappings['Clouds'] = { animatedIcon: 'cloudy'};
    this.weatherIconMappings['Rain'] = { animatedIcon: 'rainy'};
    this.weatherIconMappings['Snow'] = { animatedIcon: 'rainy'};
    this.weatherIconMappings['Extreme'] = { animatedIcon: 'rainy'};
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

  getTemperatureForDay(day) {
    return Math.floor(day.main.temp);
  }

  getDateFormatForTimestamp(timestamp) {
    return moment(timestamp).calendar();
  }


}
