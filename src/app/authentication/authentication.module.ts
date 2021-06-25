import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAuthenticationComponent } from './view-authentication/view-authentication.component';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { authenticationRoutes } from './authentication.routing';
import { HttpClientModule } from '@angular/common/http';
import { TuiButtonModule, TuiNotificationModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        ViewAuthenticationComponent
    ],
    imports: [
        CommonModule,
        authenticationRoutes,
        FormsModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiInputPasswordModule,
        TuiButtonModule,
        TuiTextfieldControllerModule,
        TuiNotificationModule,
        RouterModule,
        HttpClientModule
    ],
    exports: []
})
export class AuthenticationModule { }
