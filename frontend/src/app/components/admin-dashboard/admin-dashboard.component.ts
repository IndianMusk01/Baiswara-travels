import { Component } from '@angular/core';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
    routes = [
        { id: 101, source: 'Delhi', destination: 'Lucknow', distance: 550 },
        { id: 102, source: 'Mumbai', destination: 'Pune', distance: 150 },
        { id: 103, source: 'Bangalore', destination: 'Chennai', distance: 350 }
    ];
}
