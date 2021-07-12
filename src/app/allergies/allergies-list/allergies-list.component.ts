import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Page } from 'src/app/shared/page';
import { AllergiesService } from '../shared/allergies.service';
import { AllergyData } from '../shared/allergy-data';

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

    constructor(private allergiesSerivce: AllergiesService) { }

    ngOnInit(): void {
        this.getPageRequest();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes) {
            this.getPageRequest();
        }
    }

    private getPageRequest(): void {
        this.isLoading = true;
        this.allergiesSerivce.getPage({ page: this.pageNumber, size: this.PAGESIZE }).subscribe(response => {
            this.currentPage = response;
            console.log(response);
            
            this.isLoading = false;
        });
    }

}
