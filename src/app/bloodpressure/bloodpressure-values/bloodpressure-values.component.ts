import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/page';
import { BloodpressureData } from '../shared/bloodpressure-data';
import { BloodpressureService } from '../shared/bloodpressure.service';

@Component({
    selector: 'app-bloodpressure-values',
    templateUrl: './bloodpressure-values.component.html',
    styleUrls: ['./bloodpressure-values.component.css']
})
export class BloodpressureValuesComponent implements OnInit {

    private readonly PAGESIZE = 12;

    public pageNumber = 0;
    public currentPage: Page<BloodpressureData> | null = null;

    constructor(private bloodpressureService: BloodpressureService) { }

    ngOnInit(): void {
        this.bloodpressureService.getPage({ page: this.pageNumber, size: this.PAGESIZE }).subscribe(response => {
            this.currentPage = response;
        });
    }

    goToPage(index: number): void {
        this.pageNumber = index;
        this.bloodpressureService.getPage({ page: this.pageNumber, size: this.PAGESIZE }).subscribe(response => {
            this.currentPage = response;
        });
    }

    getPressureAndPulseValuesFormatted(bloodpressure: BloodpressureData): string {
        return `${bloodpressure.systolicValue} / ${bloodpressure.diastolicValue} / ${bloodpressure.pulseRate}`;
    }

}
