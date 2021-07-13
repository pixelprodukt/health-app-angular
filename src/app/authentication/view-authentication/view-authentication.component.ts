import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/token.service';
import { AuthenticationService } from '../shared/authentication.service';
import { SignInRequestData } from '../shared/sign-in-request-data';

@Component({
    selector: 'app-view-authentication',
    templateUrl: './view-authentication.component.html',
    styleUrls: ['./view-authentication.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewAuthenticationComponent implements OnInit {

    private _isLoading = false;
    private _showSignInError = false;

    private _loginForm: FormGroup = this.getInitialForm();

    constructor(private authService: AuthenticationService, private tokenService: TokenService, private router: Router) { }

    ngOnInit(): void {
    }

    submit(): void {

        this._isLoading = true;
        this._showSignInError = false;

        const signInRequestData: SignInRequestData = this._loginForm.value;

        this._loginForm.disable();

        this.authService.signIn(signInRequestData).subscribe(response => {

            if (response.jwt && response.tokenType === 'Bearer') {
                this.tokenService.setToken(response.jwt);
                this._loginForm = this.getInitialForm();
                this._isLoading = false;
                //this._loginForm.enable();
                this.router.navigate(['/dashboard/bloodpressure']);
            } else if (!response.jwt) {
                this._loginForm = this.getInitialForm();
                this._showSignInError = true;
                this._isLoading = false;
                this._loginForm.enable();
            }
        });
    }

    private getInitialForm() {
        return new FormGroup({
            nameOrEmail: new FormControl('', [Validators.required, Validators.minLength(4)]),
            password: new FormControl('', [Validators.required, Validators.minLength(4)])
        });
    }

    get loginForm(): FormGroup {
        return this._loginForm;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    get showSignInError(): boolean {
        return this._showSignInError;
    }
}
