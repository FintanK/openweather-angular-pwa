import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';
import { OpenweatherService } from '../../services/openweather.service';
import { NgProgress } from '@ngx-progressbar/core';
import * as momentNs from 'moment';
import { ActivatedRoute } from "@angular/router";
const moment = momentNs;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

  timestamp: string;
  forecast: Array<any>;

  /**
   * Dependency Injection
   * @param {GeolocationService} geolocationService
   * @param {ActivatedRoute} route
   * @param {OpenweatherService} openWeatherService
   * @param {NgProgress} ngProgress
   */
  constructor(
    private geolocationService: GeolocationService,
    private route: ActivatedRoute,
    private openWeatherService: OpenweatherService,
    private ngProgress: NgProgress) {
  }

  ngOnInit() {

    this.timestamp = this.route.snapshot.params.timestamp;

    this.ngProgress.ref('progressBar').start();

    this.geolocationService.findMe().getCurrentPosition( (position: Position) => {

      this.openWeatherService.fetchFiveDayForecast( position, 'metric' ).subscribe(
        (foreCast) => {
          this.forecast = this.filterForeCastByTimstamp(foreCast.list);
          this.ngProgress.ref('progressBar').complete();
        },
        (error) => {
          console.log( error );
          this.ngProgress.ref('progressBar').complete();
        }
      );
    } );
  }

  filterForeCastByTimstamp(forecast: Array<any>) {

    const filteredForeCast = [];

    forecast.forEach((interval) => {

      console.log();

      if (moment(interval.dt_txt).format('dddd') === moment(this.timestamp).format('dddd')) {
        filteredForeCast.push(interval);
      }
    });

    return filteredForeCast;
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
