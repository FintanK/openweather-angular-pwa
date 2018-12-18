import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../../../services/geolocation.service';
import { OpenweatherService } from '../../../services/openweather.service';
import { NgProgress } from '@ngx-progressbar/core';
import * as momentNs from 'moment';
import { Router } from "@angular/router";
const moment = momentNs;

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent implements OnInit {

  forecast: Array<any>;

  /**
   * Dependency Injection
   * @param {GeolocationService} geolocationService
   * @param {OpenweatherService} openWeatherService
   * @param {router} Router
   * @param {NgProgress} ngProgress
   */
  constructor(
    private geolocationService: GeolocationService,
    private openWeatherService: OpenweatherService,
    private router: Router,
    private ngProgress: NgProgress) {
  }

  ngOnInit() {
    this.ngProgress.ref('progressBar').start();

    this.geolocationService.findMe().getCurrentPosition( (position: Position) => {

      this.openWeatherService.fetchFiveDayForecast( position, 'metric' ).subscribe(
        (foreCast) => {
          this.forecast = foreCast.list;
          this.ngProgress.ref('progressBar').complete();
        },
        (error) => {
          console.log( error );
          this.ngProgress.ref('progressBar').complete();
        }
      );
    } );
  }

  getWeekDayForInterval(interval) {
    return moment(interval.dt_txt).format('dddd');
  }

  isMiddayInterval(interval) {
    return moment(interval.dt_txt).format('H') === '12';
  }

  navigateToWeekdayDetails(interval) {
    return this.router.navigate(['forecast/' + moment(interval.dt_txt).format('YYYY-MM-DD')]);
  }

}
