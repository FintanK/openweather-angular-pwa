import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GeolocationService } from './services/geolocation.service';
import { OpenweatherService } from './services/openweather.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { NgProgressModule } from '@ngx-progressbar/core';

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
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    GeolocationService,
    OpenweatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
