import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { dahsboardRoutes } from './dashboard.routing';
import { TuiTabsModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';
import { BloodpressureModule } from '../bloodpressure/bloodpressure.module';



@NgModule({
  declarations: [
    ViewDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BloodpressureModule,
    TuiTabsModule,
    dahsboardRoutes
  ]
})
export class DashboardModule { }
