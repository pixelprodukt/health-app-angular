import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { dahsboardRoutes } from './dashboard.routing';
import { TuiTabsModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';
import { BloodpressureModule } from '../bloodpressure/bloodpressure.module';
import { AllergiesModule } from '../allergies/allergies.module';
import { MedicationPlanModule } from '../medication-plan/medication-plan.module';



@NgModule({
    declarations: [
        ViewDashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        BloodpressureModule,
        AllergiesModule,
        MedicationPlanModule,
        TuiTabsModule,
        dahsboardRoutes
    ]
})
export class DashboardModule { }
