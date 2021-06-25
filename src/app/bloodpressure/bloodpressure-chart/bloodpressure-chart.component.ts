import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDay, TuiDayRange, TUI_DEFAULT_STRINGIFY } from '@taiga-ui/cdk';
import { TuiPoint } from '@taiga-ui/core';
import { BloodpressureData } from '../shared/bloodpressure-data';
import { BloodpressureService } from '../shared/bloodpressure.service';
import { DateRangeRequestData } from '../shared/date-range-request-data';

@Component({
    selector: 'app-bloodpressure-chart',
    templateUrl: './bloodpressure-chart.component.html',
    styleUrls: ['./bloodpressure-chart.component.css']
})
export class BloodpressureChartComponent implements OnInit {

    private _isLoading = false;

    readonly dateRangeForm = new FormGroup({
        dateRange: new FormControl(
            new TuiDayRange(TuiDay.currentLocal(), TuiDay.currentLocal()),
        ),
    });

    readonly min = new TuiDay(2000, 2, 20);
    readonly max = new TuiDay(2040, 2, 20);
    readonly stringify = TUI_DEFAULT_STRINGIFY;

    value: TuiPoint[] = [
        [0, 50],
        [100, 75],
        [200, 50],
        [300, 150]
    ];

    labels: string[] = ['eins', 'zwei', 'drei', 'vier'];

    constructor(private bloodpressureService: BloodpressureService) { }

    ngOnInit(): void {
    }

    submit(): void {

        this._isLoading = true;
        const dayRangeValue: TuiDayRange = this.dateRangeForm.get('dateRange')?.value;
        this.dateRangeForm.disable();

        this.bloodpressureService.getAllByDateRange(this.getDateRangeRequestFromTuiDayRange(dayRangeValue))
            .subscribe(response => {
                console.log(response);
                this.createChartDataFromBloodpressureData(response);
                this._isLoading = false;
                this.dateRangeForm.enable();
            });
    }

    private createChartDataFromBloodpressureData(bloodpressures: BloodpressureData[]): void {

        const systolicValues: TuiPoint[] = [];
        const labelValues: string[] = [];
        const distanceBetweenDots = 400 / bloodpressures.length;

        for (let i = 0; i < bloodpressures.length; i++) {
            systolicValues.push([distanceBetweenDots * i, bloodpressures[i].systolicValue]);
            //labelValues.push(bloodpressures[i].measuredAt.slice(0, 10));
        }

        this.value = systolicValues
        this.labels = labelValues;
    }

    private getDateRangeRequestFromTuiDayRange(tuiDayRange: TuiDayRange): DateRangeRequestData {

        const start = new Date(tuiDayRange.from.toLocalNativeDate().setDate(tuiDayRange.from.day - 1));
        start.setHours(24);
        start.setMinutes(59);
        const end = new Date(tuiDayRange.to.toLocalNativeDate());
        end.setHours(24);
        end.setMinutes(59);
        const startDate = start.toISOString();
        const endDate = end.toISOString();

        return { startDate: startDate, endDate: endDate };
    }

    get isLoading(): boolean {
        return this._isLoading;
    }
 
}
