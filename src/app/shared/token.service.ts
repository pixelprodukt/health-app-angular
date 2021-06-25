import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    private _token: string = '';
    private _storage: Storage = localStorage;

    constructor() { }

    public setToken(token: string): void {
        this._token = token;
        this._storage.setItem('token', token);
    }

    public getToken(): string|null {

        if (this._storage.getItem('token')) {
            return this._storage.getItem('token');
        }

        return this._token
    }
}
