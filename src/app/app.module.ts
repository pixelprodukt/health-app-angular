import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiDialogModule, TuiLabelModule, TuiNotificationsModule, TuiRootModule } from '@taiga-ui/core';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthenticationInterceptor } from './shared/authentication.interceptor';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiDialogModule,
        TuiNotificationsModule,
        AuthenticationModule,
        DashboardModule,
        TuiLabelModule,
        appRoutes
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthenticationInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
