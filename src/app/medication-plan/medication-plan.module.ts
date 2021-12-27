import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMedicationPlanComponent } from './view-medication-plan/view-medication-plan.component';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiDataListModule, TuiFormatNumberPipeModule, TuiGroupModule, TuiLabelModule, TuiScrollbarModule } from '@taiga-ui/core';
import { MedicationPlanTableComponent } from './medication-plan-table/medication-plan-table.component';
import { TuiDataListWrapperModule, TuiInputCountModule, TuiInputDateModule, TuiInputModule, TuiInputNumberModule, TuiSelectModule } from '@taiga-ui/kit';
import { TuiValidatorModule } from '@taiga-ui/cdk';



@NgModule({
    declarations: [
        ViewMedicationPlanComponent,
        MedicationPlanTableComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        TuiTableModule,
        TuiScrollbarModule,
        TuiInputNumberModule,
        TuiValidatorModule,
        TuiDataListModule,
        TuiButtonModule,
        TuiFormatNumberPipeModule,
        TuiSelectModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiLabelModule,
        TuiInputModule,
        TuiGroupModule,
        TuiInputDateModule,
        TuiInputCountModule
    ]
})
export class MedicationPlanModule { }
