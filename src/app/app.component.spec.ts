import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GeolocationService } from './services/geolocation.service';
import { OpenweatherService } from './services/openweather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DailyForecastComponent } from './components/shared/daily-forecast/daily-forecast.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { OverviewComponent } from './components/pages/overview/overview.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        DetailsComponent,
        OverviewComponent,
        DailyForecastComponent,
      ],
      providers: [
        GeolocationService,
        OpenweatherService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should fetchCurrentWeatherIconCode', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.currentWeather = {
      weather: [{
        icon: 'TestIcon'
      }]
    };

    expect(app.fetchCurrentWeatherIconCode()).toBe('TestIcon');
  });

  it('should getOutlookDescription', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.currentWeather = {
      weather: [{
        description: 'test description'
      }]
    };

    expect(app.getOutlookDescription()).toBe('Test description');
  });

});
