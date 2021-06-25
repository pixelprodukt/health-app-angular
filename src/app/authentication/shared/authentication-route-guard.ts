import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { TokenService } from "src/app/shared/token.service";

@Injectable()
export class AuthenticationRouteGuard implements CanActivate {

    constructor(private _tokenService: TokenService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
        if (this._tokenService.getToken()) {            
            return true;
        }
        
        return this.router.navigate(['/authentication']);
    }
}