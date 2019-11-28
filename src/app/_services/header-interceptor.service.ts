import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const clientId =
      "2535039a301f86f8a40e52c3748d475a86bb4b7efaddf2aafcc45661de6d64ac";
    const request = req.clone({
      headers: req.headers.set("Authorization", `Client-ID ${clientId}`)
    });
    return next.handle(request);
  }
}
