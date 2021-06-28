import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDay, TuiDayRange, TUI_DEFAULT_STRINGIFY } from '@taiga-ui/cdk';
import { TuiPoint } from '@taiga-ui/core';
import { BloodpressureData } from '../shared/bloodpressure-data';
import { BloodpressureService } from '../shared/bloodpressure.service';
import { DateRangeRequestData } from '../shared/date-range-request-data';
import { Month } from '../shared/month';

interface BloodpressureAverageValue {
    systolic: number;
    diastolic: number;
    pulse: number;
}

@Component({
    selector: 'app-bloodpressure-chart',
    templateUrl: './bloodpressure-chart.component.html',
    styleUrls: ['./bloodpressure-chart.component.css']
})
export class BloodpressureChartComponent implements OnInit {

    private readonly MONTHS: Month[] = [
        { name: 'January', abbreviation: 'JAN', numberOfDays: 31 },
        { name: 'February', abbreviation: 'FEB', numberOfDays: 28 }, // Note: can have 29 days, but doesn't matter here at the moment
        { name: 'March', abbreviation: 'MAR', numberOfDays: 31 },
        { name: 'April', abbreviation: 'APR', numberOfDays: 30 },
        { name: 'May', abbreviation: 'MAY', numberOfDays: 31 },
        { name: 'June', abbreviation: 'JUN', numberOfDays: 30 },
        { name: 'July', abbreviation: 'JUL', numberOfDays: 31 },
        { name: 'August', abbreviation: 'AUG', numberOfDays: 31 },
        { name: 'September', abbreviation: 'SEP', numberOfDays: 30 },
        { name: 'October', abbreviation: 'OCT', numberOfDays: 31 },
        { name: 'November', abbreviation: 'NOV', numberOfDays: 30 },
        { name: 'December', abbreviation: 'DEC', numberOfDays: 31 },
    ];

    readonly yAxisLabels: string[] = ['0', '20', '40', '60', '80', '100', '120', '140', '160', '180', '200'];

    private _isLoading = false;

    readonly dateRangeForm = new FormGroup({
        dateRange: new FormControl(
            new TuiDayRange(TuiDay.currentLocal(), TuiDay.currentLocal()),
        ),
    });

    readonly min = new TuiDay(2000, 2, 20);
    readonly max = new TuiDay(2040, 2, 20);
    readonly stringify = TUI_DEFAULT_STRINGIFY;

    chartValues: any[] = [];
    average: BloodpressureAverageValue = { systolic: 0, diastolic: 0, pulse: 0 };

    constructor(private bloodpressureService: BloodpressureService) { }

    ngOnInit(): void {
        const now = new Date();
        const tuiDayRangeWithCurrentMonth = new TuiDayRange(
            new TuiDay(now.getFullYear(), now.getMonth(), 1),
            new TuiDay(now.getFullYear(), now.getMonth(), this.MONTHS[now.getMonth()].numberOfDays)
        );
        this.dateRangeForm.get('dateRange')?.patchValue(tuiDayRangeWithCurrentMonth);

        this.submit();
    }

    submit(): void {

        this._isLoading = true;
        const dayRangeValue: TuiDayRange = this.dateRangeForm.get('dateRange')?.value;
        this.dateRangeForm.disable();

        this.bloodpressureService.getAllByDateRange(this.getDateRangeRequestFromTuiDayRange(dayRangeValue))
            .subscribe(response => {
                this.createChartDataFromBloodpressureData(response);
                this.average = this.caluculateAverageValuesFromBloodpressureData(response);
                this._isLoading = false;
                this.dateRangeForm.enable();
            });
    }

    private createChartDataFromBloodpressureData(bloodpressures: BloodpressureData[]): void {

        this.chartValues = [];

        const systolicValues: TuiPoint[] = [];
        const diastolicValues: TuiPoint[] = [];
        const pulseRateValues: TuiPoint[] = [];
        const distanceBetweenDots = 400 / bloodpressures.length;


        for (let i = 0; i < bloodpressures.length; i++) {
            systolicValues.push([distanceBetweenDots * i, bloodpressures[i].systolicValue]);
            diastolicValues.push([distanceBetweenDots * i, bloodpressures[i].diastolicValue]);
            pulseRateValues.push([distanceBetweenDots * i, bloodpressures[i].pulseRate]);
        }

        this.chartValues.push(systolicValues);
        this.chartValues.push(diastolicValues);
        this.chartValues.push(pulseRateValues);
    }

    private caluculateAverageValuesFromBloodpressureData(bloodpressures: BloodpressureData[]): BloodpressureAverageValue {

        const length = bloodpressures.length;

        // https://www.tutsmake.com/javascript-sum-array-object-values-examples/
        const systolicTotal = bloodpressures.reduce((total, current) => { return total + current.systolicValue }, 0);
        const diastolicTotal = bloodpressures.reduce((total, current) => { return total + current.diastolicValue }, 0);
        const pulseTotal = bloodpressures.reduce((total, current) => { return total + current.pulseRate }, 0);

        return { systolic: systolicTotal / length, diastolic: diastolicTotal / length, pulse: pulseTotal / length };
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
