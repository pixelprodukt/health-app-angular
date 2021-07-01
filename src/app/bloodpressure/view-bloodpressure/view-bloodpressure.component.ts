import { Component, OnInit } from '@angular/core';
import { BloodpressureData } from '../shared/bloodpressure-data';

@Component({
    selector: 'app-view-bloodpressure',
    templateUrl: './view-bloodpressure.component.html',
    styleUrls: ['./view-bloodpressure.component.css'],
})
export class ViewBloodpressureComponent implements OnInit {

    reloadValues: BloodpressureData | null = null;

    constructor() { }

    ngOnInit(): void {
    }

    triggerReloadForValues(event: BloodpressureData) {
        this.reloadValues = event;
    }
}
