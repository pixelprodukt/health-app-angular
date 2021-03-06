import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllergiesComponent } from './view-allergies/view-allergies.component';
import { AllergiesFormComponent } from './allergies-form/allergies-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { TuiFieldErrorModule, TuiInputModule, TuiIslandModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { AllergiesListComponent } from './allergies-list/allergies-list.component';
import { ModalsModule } from '../modals/modals.module';



@NgModule({
    declarations: [
        ViewAllergiesComponent,
        AllergiesFormComponent,
        AllergiesListComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        TuiButtonModule,
        TuiInputModule,
        TuiTextAreaModule,
        TuiFieldErrorModule,
        TuiLoaderModule,
        TuiIslandModule,
        ModalsModule
    ]
})
export class AllergiesModule { }
