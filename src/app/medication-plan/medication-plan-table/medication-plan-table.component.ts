import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-medication-plan-table',
    templateUrl: './medication-plan-table.component.html',
    styleUrls: ['./medication-plan-table.component.css']
})
export class MedicationPlanTableComponent implements OnInit {

    readonly items = ['Black', 'Gold', 'Silver'];
    readonly form = new FormGroup({
        name: new FormControl('', Validators.required),
        date: new FormControl(null, Validators.required),
        color: new FormControl(null, Validators.required),
        quantity: new FormControl(),
        sum: new FormControl(255),
    });

    constructor() { }

    ngOnInit(): void {
    }

}
