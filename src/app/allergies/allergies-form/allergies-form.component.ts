import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllergiesService } from '../shared/allergies.service';
import { AllergyData } from '../shared/allergy-data';

@Component({
    selector: 'app-allergies-form',
    templateUrl: './allergies-form.component.html',
    styleUrls: ['./allergies-form.component.css']
})
export class AllergiesFormComponent implements OnInit {

    @Output() formWasSubmitted = new EventEmitter<AllergyData>();

    isLoading = false;

    private _allergyForm: FormGroup = this.getInitialFormGroup();

    constructor(private allergiesService: AllergiesService) { }

    ngOnInit(): void {
    }

    submit() {

        if (this._allergyForm.valid && this._allergyForm.dirty) {

            this.isLoading = true;
            this._allergyForm.disable();

            const allergiesData = this._allergyForm.value;

            this.allergiesService.postAllergy(allergiesData).subscribe(response => {
                this.isLoading = false;
                this._allergyForm.enable();
                this._allergyForm = this.getInitialFormGroup();
                this.formWasSubmitted.emit(allergiesData);
            });
        }
    }

    private getInitialFormGroup() {
        return new FormGroup({
            id: new FormControl(0),
            description: new FormControl('', [Validators.required, Validators.max(100)]),
            reaction: new FormControl('', [Validators.max(600)])
        });
    }

    get allergiesForm() {
        return this._allergyForm;
    }

}
