import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL } from 'src/app/shared/url';
import { JwtAuthenticationResponseData } from './jwt-authentication-response-data';
import { SignInRequestData } from './sign-in-request-data';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    signIn(SignInRequestData: SignInRequestData): Observable<JwtAuthenticationResponseData> {
        return this.http.post<JwtAuthenticationResponseData>(URL.SIGNIN, SignInRequestData);
    }

    signUp(): Observable<any> {
        return this.http.post(URL.SIGNUP, {});
    }
}
