import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '../models/dashboard';

@Injectable({
    providedIn: 'root'
})

export class DashboardService {

    url = "http://localhost:3000/dashboard";

    constructor(private httpClient: HttpClient) { }

    getDashboard(): Observable<Dashboard> {
        return this.httpClient.get<Dashboard>(this.url);
    }
}