import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { LoginService } from './login/login.service'
import { Injector } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private inj: Injector) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authHeader = 'Bearer ' + this.inj.get(LoginService).getToken();
        const authReq = req.clone({setHeaders: {Authorization: authHeader}});

        return next.handle(authReq);
    }
}
