import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { TuiButtonModule, TuiDialogModule } from '@taiga-ui/core';



@NgModule({
    declarations: [
        ConfirmationModalComponent
    ],
    imports: [
        CommonModule,
        TuiButtonModule
    ]
})
export class ModalsModule { }
