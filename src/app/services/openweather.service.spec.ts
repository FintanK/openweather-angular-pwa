import { TestBed } from '@angular/core/testing';

import { OpenweatherService } from './openweather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { GeolocationService } from './geolocation.service';

describe('OpenweatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule,
      RouterTestingModule
    ],
    providers: [
      GeolocationService,
      OpenweatherService
    ],
  }));

  it('should be created', () => {
    const service: OpenweatherService = TestBed.get(OpenweatherService);
    expect(service).toBeTruthy();
  });
});
