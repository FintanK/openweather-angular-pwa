import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GeolocationService } from './services/geolocation.service';
import { OpenweatherService } from './services/openweather.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { OpenWeatherInterceptor } from './interceptors/openweather.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'forecast',
    component: DetailsComponent
  },
  { path: '**', redirectTo: '/overview' }
];

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    RouterModule.forRoot(routes, {useHash: true}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    GeolocationService,
    OpenweatherService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OpenWeatherInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
