import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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

    @Input() triggerReloading: BloodpressureData | null = null;

    isLoading = false;

    private readonly PAGESIZE = 9;

    pageNumber = 0;
    currentPage: Page<BloodpressureData> | null = null;

    systolicValueClassification: ValueClassification = {
        normal: 130,
        highNormal: 140,
        hypertensionOne: 160
    }

    diastolicValueClassification: ValueClassification = {
        normal: 85,
        highNormal: 90,
        hypertensionOne: 100
    }

    constructor(private bloodpressureService: BloodpressureService) { }

    ngOnInit(): void {
        this.getPageRequest();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes) {
            this.getPageRequest();
        }
    }

    goToPage(index: number): void {
        this.pageNumber = index;
        this.getPageRequest();
    }

    private getPageRequest() {
        this.isLoading = true;
        this.bloodpressureService.getPage({ page: this.pageNumber, size: this.PAGESIZE }).subscribe(response => {
            this.currentPage = response;
            this.isLoading = false;
        });
    }

    deleteBloodpressure(id: number) {
        this.isLoading = true;
        this.bloodpressureService.deleteBloodpressure(id).subscribe(response => {
            this.getPageRequest();
        });
    }

    getPressureAndPulseValuesFormatted(bloodpressure: BloodpressureData): string {
        return `${bloodpressure.systolicValue} / ${bloodpressure.diastolicValue} / ${bloodpressure.pulseRate}`;
    }

    getBubbleColor(bloodpressure: BloodpressureData): string {

        let systolicResult = this.getClassification(bloodpressure.systolicValue, this.systolicValueClassification);
        let diastolicResult = this.getClassification(bloodpressure.diastolicValue, this.diastolicValueClassification);

        if (systolicResult === diastolicResult) {
            return systolicResult.toString();
        }
        if (systolicResult === BLoodpressureClassifications.NORMAL && diastolicResult === BLoodpressureClassifications.HIGH_NORMAL) {
            return BLoodpressureClassifications.HIGH_NORMAL.toString();
        }
        if (systolicResult === BLoodpressureClassifications.HIGH_NORMAL && diastolicResult === BLoodpressureClassifications.NORMAL) {
            return BLoodpressureClassifications.NORMAL.toString();
        }
        if (systolicResult === BLoodpressureClassifications.HYPERTENSION_ONE || diastolicResult === BLoodpressureClassifications.HYPERTENSION_ONE) {
            return BLoodpressureClassifications.HYPERTENSION_ONE.toString();
        }
        return 'bp-default-bg';
    }

    private getClassification(value: number, classificationScala: ValueClassification): BLoodpressureClassifications {
        if (value < classificationScala.normal) {
            return BLoodpressureClassifications.NORMAL;
        }
        if (value < classificationScala.highNormal) {
            return BLoodpressureClassifications.HIGH_NORMAL;
        }
        return BLoodpressureClassifications.HYPERTENSION_ONE;
    }

}
