import { Component, Input, OnInit } from '@angular/core';
import * as momentNs from 'moment';
const moment = momentNs;

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.less']
})
export class DailyForecastComponent implements OnInit {

  @Input() forecast: Array<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.forecast);
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
