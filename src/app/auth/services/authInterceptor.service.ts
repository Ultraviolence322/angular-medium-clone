import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LocalStorageApiService } from "src/app/shared/services/local-sotage-api/local-storage-api.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorageApiService: LocalStorageApiService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorageApiService.getData('auth-token')
    req = req.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : ''
      }
    })

    return next.handle(req)
  }
}