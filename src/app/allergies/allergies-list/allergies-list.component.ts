import { Component, Inject, Injector, Input, OnInit, SimpleChanges } from '@angular/core';
import { TuiDialogOptions, TuiDialogService, TuiNotificationsService } from '@taiga-ui/core';
import { ConfirmationModalComponent } from 'src/app/modals/confirmation-modal/confirmation-modal.component';
import { Page } from 'src/app/shared/page';
import { AllergiesService } from '../shared/allergies.service';
import { AllergyData } from '../shared/allergy-data';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'app-allergies-list',
    templateUrl: './allergies-list.component.html',
    styleUrls: ['./allergies-list.component.css']
})
export class AllergiesListComponent implements OnInit {

    @Input() triggerReloading: AllergyData | null = null;

    isLoading = false;
    allergies: AllergyData[] = [];

    private readonly PAGESIZE = 9;

    pageNumber = 0;
    currentPage: Page<AllergyData> | null = null;

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector,
        @Inject(TuiNotificationsService) private readonly notificationsService: TuiNotificationsService,
        private allergiesSerivce: AllergiesService) { }

    ngOnInit(): void {
        this.getPageRequest();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes) {
            this.getPageRequest();
        }
    }

    openConfirmationModal(id: number): void {

        const modalOptions: Partial<TuiDialogOptions<any>> = { data: id, label: 'Confirm', dismissible: true };

        this.dialogService.open(new PolymorpheusComponent(ConfirmationModalComponent, this.injector), modalOptions).subscribe({
            next: data => {
                if (data !== null) {
                    this.deleteAllergy(data as number);
                    this.notificationsService.show('Entry was deleted.').subscribe();
                }
            },
            complete: () => { },
        });
    }

    private deleteAllergy(id: number) {
        this.isLoading = true;
        this.allergiesSerivce.deleteAllergy(id).subscribe(response => {
            this.getPageRequest();
        });
    }

    private getPageRequest(): void {
        this.isLoading = true;
        this.allergiesSerivce.getPage({ page: this.pageNumber, size: this.PAGESIZE }).subscribe(response => {
            this.currentPage = response;
            this.isLoading = false;
        });
    }

}
