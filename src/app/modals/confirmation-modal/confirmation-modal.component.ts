import { Component, Inject, OnInit } from '@angular/core';
import { TuiDialog } from '@taiga-ui/cdk';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

interface PromptOptions {
    readonly heading: string;
    readonly text: string;
    readonly data: number;
}

@Component({
    selector: 'app-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

    constructor(@Inject(POLYMORPHEUS_CONTEXT) readonly context: TuiDialog<PromptOptions, number | null>) { }

    ngOnInit(): void {
    }

    confirm() {
        this.context.completeWith(this.context.data);
    }

    close() {
        this.context.completeWith(null);
    }

}
