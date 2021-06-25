import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(private _tokenService: TokenService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        const token = this._tokenService.getToken();

        if (token) {

            const clonedRequest = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + token)
            });

            return next.handle(clonedRequest);

        } else {
            return next.handle(request);
        }
    }
}
