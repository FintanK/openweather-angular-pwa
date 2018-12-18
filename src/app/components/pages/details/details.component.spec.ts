import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { GeolocationService } from '../../../services/geolocation.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OpenweatherService } from '../../../services/openweather.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DailyForecastComponent } from '../../shared/daily-forecast/daily-forecast.component';
import { OverviewComponent } from '../overview/overview.component';
import { AppComponent } from '../../../app.component';
import { NgProgressModule } from '@ngx-progressbar/core';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        NgProgressModule.forRoot(),
      ],
      providers: [
        GeolocationService,
        OpenweatherService
      ],
      declarations: [
        AppComponent,
        DetailsComponent,
        OverviewComponent,
        DailyForecastComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
