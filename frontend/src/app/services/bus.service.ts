import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/data.models';

const API_URL = 'http://localhost:8080/api/buses/';

@Injectable({
    providedIn: 'root'
})
export class BusService {

    constructor(private http: HttpClient) { }

    searchBuses(source: string, dest: string, date: string): Observable<Trip[]> {
        let params = new HttpParams()
            .set('source', source)
            .set('destination', dest)
            .set('date', date);
        return this.http.get<Trip[]>(API_URL + 'search', { params });
    }

    getTrip(id: number): Observable<Trip> {
        return this.http.get<Trip>(API_URL + id);
    }
}
