import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/page';
import { BLoodpressureClassifications } from '../shared/bloodpressure-classifications';
import { BloodpressureData } from '../shared/bloodpressure-data';
import { BloodpressureService } from '../shared/bloodpressure.service';
import { ValueClassification } from '../shared/value-classification';

@Component({
    selector: 'app-bloodpressure-values',
    templateUrl: './bloodpressure-values.component.html',
    styleUrls: ['./bloodpressure-values.component.css']
})
export class BloodpressureValuesComponent implements OnInit {

    private readonly PAGESIZE = 9;

    pageNumber = 0;
    currentPage: Page<BloodpressureData> | null = null;

    systolicValueClassification: ValueClassification = {
        optimal: 120,
        normal: 130,
        highNormal: 140,
        hypertensionOne: 160,
        hypertensionTwo: 180
    }

    diastolicValueClassification: ValueClassification = {
        optimal: 80,
        normal: 85,
        highNormal: 90,
        hypertensionOne: 100,
        hypertensionTwo: 110
    }

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

    getBubbleColor(bloodpressure: BloodpressureData): string {

        let systolicResult = this.getClassification(bloodpressure.systolicValue, this.systolicValueClassification);
        let diastolicResult = this.getClassification(bloodpressure.diastolicValue, this.systolicValueClassification);

        switch (systolicResult) {
            case BLoodpressureClassifications.OPTIMAL: return 'bp-lightgreen-bg';
            case BLoodpressureClassifications.NORMAL: return 'bp-green-bg';
            case BLoodpressureClassifications.HIGH_NORMAL: return 'bp-lightyellow-bg';
            case BLoodpressureClassifications.HYPERTENSION_ONE: return 'bp-yellow-bg';
            default: return 'bp-red-bg';
        }
    }

    getClassification(value: number, classificationScala: ValueClassification): BLoodpressureClassifications {
        if (value <= classificationScala.optimal) {
            return BLoodpressureClassifications.OPTIMAL;
        } else if (value <= classificationScala.normal) {
            return BLoodpressureClassifications.NORMAL;
        } else if (value <= classificationScala.highNormal) {
            return BLoodpressureClassifications.HIGH_NORMAL;
        } else if (value <= classificationScala.hypertensionOne) {
            return BLoodpressureClassifications.HYPERTENSION_ONE;
        } else {
            return BLoodpressureClassifications.HYPERTENSION_TWO;
        }
    }

}
