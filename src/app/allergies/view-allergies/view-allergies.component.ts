import { Component, OnInit } from '@angular/core';
import { AllergyData } from '../shared/allergy-data';

@Component({
    selector: 'app-view-allergies',
    templateUrl: './view-allergies.component.html',
    styleUrls: ['./view-allergies.component.css']
})
export class ViewAllergiesComponent implements OnInit {

    reloadValues: AllergyData | null = null;

    constructor() { }

    ngOnInit(): void {
    }

    triggerReloadForValues(event: AllergyData) {
        this.reloadValues = event;
    }

}
