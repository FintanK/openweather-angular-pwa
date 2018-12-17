import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class OpenWeatherInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.indexOf( 'api.openweathermap.org' ) > -1 ) {
      const modified = req.clone(
        {
          setParams: {
            'APPID' : environment.openWeatherAPIKey
          }
        }
      );
      return next.handle( modified );
    }

    return next.handle( req );
  }
}
