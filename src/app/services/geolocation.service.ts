import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  findMe() {
    if (navigator.geolocation) {
      return navigator.geolocation;
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

}
