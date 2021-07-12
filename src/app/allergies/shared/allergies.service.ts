import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/page';
import { PageRequestData } from 'src/app/shared/page-request.data';
import { URL } from 'src/app/shared/url';
import { AllergyData } from './allergy-data';

@Injectable({
    providedIn: 'root'
})
export class AllergiesService {

    constructor(private http: HttpClient) { }

    getPage(page: PageRequestData): Observable<Page<AllergyData>> {
        return this.http.post<Page<AllergyData>>(URL.ALLERGIES_PAGE, page);
    }

    postAllergy(allergy: AllergyData): Observable<any> {
        return this.http.post<AllergyData>(URL.ALLERGIES, allergy);
    }

    deleteAllergy(id: number): Observable<any> {
        return this.http.delete<AllergyData>(`${URL.ALLERGIES}/${id}`);
    }
}
