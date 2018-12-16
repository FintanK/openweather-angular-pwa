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
  }

  ngOnInit() {
    this.geolocationService.findMe().getCurrentPosition( (position: Position) => {
      this.position = position;
      console.log( this.position );

      this.openWeatherService.fetchFiveDayForecast( position, 'metric' ).subscribe(
        (foreCast) => {
          this.forecast = foreCast.list;

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

  getOutlookDescriptionForDay(day) {
    return day.weather[0].description.charAt(0).toUpperCase() + day.weather[0].description.slice(1);
  }

  getWindSpeedForDay(day) {
    return Math.floor(day.wind.speed);
  }

  getDateFormatForTimestamp(timestamp) {
    return moment(timestamp).calendar();
  }


}
