import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../../services/bus.service';
import { Trip } from '../../models/data.models';

@Component({
    selector: 'app-bus-list',
    templateUrl: './bus-list.component.html',
    styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
    trips: Trip[] = [];
    source: string = '';
    destination: string = '';
    date: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private busService: BusService
    ) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.source = params['source'];
            this.destination = params['destination'];
            this.date = params['date'];

            if (this.source && this.destination && this.date) {
                this.searchBuses();
            } else {
                // Mock data for demo if no params
                this.loadMockData();
            }
        });
    }

    searchBuses() {
        this.busService.searchBuses(this.source, this.destination, this.date).subscribe(
            data => this.trips = data,
            err => {
                console.error(err);
                this.loadMockData(); // Fallback to mock
            }
        );
    }

    viewSeats(tripId: number) {
        this.router.navigate(['/booking', tripId]);
    }

    loadMockData() {
        this.source = this.source || 'Delhi';
        this.destination = this.destination || 'Lucknow';
        this.trips = [
            {
                id: 1,
                sourceCity: this.source,
                destinationCity: this.destination,
                departureTime: '2023-12-13T22:30:00',
                arrivalTime: '2023-12-14T06:00:00',
                fare: 899,
                bus: { code: 'BGE-101', type: 'AC Sleeper (2+1)', operatorName: 'Baiswara Golden Express' }
            },
            {
                id: 2,
                sourceCity: this.source,
                destinationCity: this.destination,
                departureTime: '2023-12-13T23:15:00',
                arrivalTime: '2023-12-14T07:45:00',
                fare: 750,
                bus: { code: 'BGE-102', type: 'AC Seater/Sleeper', operatorName: 'Baiswara Golden Express' }
            },
            {
                id: 3,
                sourceCity: this.source,
                destinationCity: this.destination,
                departureTime: '2023-12-13T21:00:00',
                arrivalTime: '2023-12-14T05:00:00',
                fare: 1200,
                bus: { code: 'BGE-105', type: 'Volvo Multi-Axle', operatorName: 'Baiswara Royal' }
            }
        ];
    }
}
