import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { LoginService } from './login/login.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authHeader = 'Bearer ' + this.loginService.getToken();
        const authReq = req.clone({setHeaders: {Authorization: authHeader}});

        return next.handle(authReq);
    }
}
