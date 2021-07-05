import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/page';
import { URL } from 'src/app/shared/url';
import { BloodpressureData } from './bloodpressure-data';
import { DateRangeRequestData } from './date-range-request-data';
import { PageRequestData } from './page-request.data';

@Injectable({
    providedIn: 'root'
})
export class BloodpressureService {

    constructor(private http: HttpClient) { }

    getPage(page: PageRequestData): Observable<Page<BloodpressureData>> {
        return this.http.post<Page<BloodpressureData>>(URL.BLOODPRESSURE_PAGE, page);
    }

    postBloodpressure(bloodpressure: BloodpressureData): Observable<any> {
        return this.http.post<BloodpressureData>(URL.BLOODPRESSURE, bloodpressure);
    }

    getAllByDateRange(dateRange: DateRangeRequestData): Observable<BloodpressureData[]> {
        return this.http.post<BloodpressureData[]>(URL.BLOODPRESSURE_DATERANGE, dateRange);
    }

    deleteBloodpressure(id: number): Observable<any> {
        return this.http.delete<BloodpressureData>(`${URL.BLOODPRESSURE}/${id}`);
    }
}
