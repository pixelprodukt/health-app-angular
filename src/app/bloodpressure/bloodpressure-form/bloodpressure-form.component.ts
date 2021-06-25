import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDay, TuiTime } from '@taiga-ui/cdk';
import { BloodpressureData } from '../shared/bloodpressure-data';
import { BloodpressureService } from '../shared/bloodpressure.service';

@Component({
    selector: 'app-bloodpressure-form',
    templateUrl: './bloodpressure-form.component.html',
    styleUrls: ['./bloodpressure-form.component.css']
})
export class BloodpressureFormComponent implements OnInit {

    private _isLoading = false;
    private _bloodpressureForm: FormGroup = this.getInitialFormGroup();

    readonly armSides = ['L', 'R'];

    constructor(private bloodpressureService: BloodpressureService) { }

    ngOnInit(): void {
    }

    submit(): void {

        if (this._bloodpressureForm.valid) {

            this._isLoading = true;

            const bloodpressureData: BloodpressureData = this._bloodpressureForm.value;
            const tuiDayFromForm = this._bloodpressureForm.get('measuredAt')?.value[0] as TuiDay;
            const tuiTimeFromForm = this._bloodpressureForm.get('measuredAt')?.value[1] as TuiTime;
            const measuredAtDate = tuiDayFromForm.toLocalNativeDate();
            measuredAtDate.setHours(tuiTimeFromForm.hours);
            measuredAtDate.setMinutes(tuiTimeFromForm.minutes);
            bloodpressureData.measuredAt = measuredAtDate.toISOString();

            this._bloodpressureForm.disable();

            this.bloodpressureService.postBloodpressure(bloodpressureData).subscribe(response => {
                this._isLoading = false;
                this._bloodpressureForm.enable();
                this._bloodpressureForm = this.getInitialFormGroup();
            });
        }
    }

    private getInitialFormGroup(): FormGroup {
        return new FormGroup({
            id: new FormControl(0),
            systolicValue: new FormControl(0, [Validators.required, Validators.max(400)]),
            diastolicValue: new FormControl(0, [Validators.required, Validators.max(400)]),
            pulseRate: new FormControl(0, [Validators.required, Validators.max(400)]),
            armSide: new FormControl('L'),
            comment: new FormControl(''),
            measuredAt: new FormControl([TuiDay.currentLocal(), TuiTime.currentLocal()], Validators.required)
        });
    }

    get bloodpressureForm(): FormGroup {
        return this._bloodpressureForm;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }
}
