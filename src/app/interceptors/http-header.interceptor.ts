import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";


@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor{
    constructor(){}

    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ):Observable<HttpEvent<any>> {
      req = req.clone({
        setHeaders: {
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
          'x-rapidapi-key': '6cfc91e072mshc87972290ac3e2cp1580b9jsn4e8cf7729be6'
        },
        setParams: {
          key: 'a6a161aa4769453ca22d929b1f7b20d7'
        }
      });

      return next.handle(req);
    }
}
