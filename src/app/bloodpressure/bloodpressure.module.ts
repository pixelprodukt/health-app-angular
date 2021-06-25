import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBloodpressureComponent } from './view-bloodpressure/view-bloodpressure.component';
import { bloodpressureRoutes } from './bloodpressure.routing';
import { AuthenticationRouteGuard } from '../authentication/shared/authentication-route-guard';
import { TuiButtonModule, TuiDataListModule, TuiGroupModule, TuiLoaderModule, TuiTableModeModule } from '@taiga-ui/core';
import { TuiComboBoxModule, TuiDataListWrapperModule, TuiFieldErrorModule, TuiFilterByInputPipeModule, TuiInputDateRangeModule, TuiInputDateTimeModule, TuiInputModule, TuiInputNumberModule, TuiIslandModule, TuiPaginationModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { BloodpressureFormComponent } from './bloodpressure-form/bloodpressure-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BloodpressureChartComponent } from './bloodpressure-chart/bloodpressure-chart.component';
import { TuiAxesModule, TuiLineChartModule } from '@taiga-ui/addon-charts';
import { BloodpressureValuesComponent } from './bloodpressure-values/bloodpressure-values.component';


@NgModule({
    declarations: [
        ViewBloodpressureComponent,
        BloodpressureFormComponent,
        BloodpressureChartComponent,
        BloodpressureValuesComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputNumberModule,
        TuiFieldErrorModule,
        TuiGroupModule,
        TuiIslandModule,
        TuiTableModeModule,
        TuiButtonModule,
        TuiComboBoxModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiFilterByInputPipeModule,
        TuiInputDateTimeModule,
        TuiTextAreaModule,
        TuiInputDateRangeModule,
        TuiAxesModule,
        TuiLineChartModule,
        TuiLoaderModule,
        TuiPaginationModule,
        bloodpressureRoutes
    ],
    providers: [AuthenticationRouteGuard]
})
export class BloodpressureModule { }
