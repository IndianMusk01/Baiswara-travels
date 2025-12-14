import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-booking-history',
    templateUrl: './booking-history.component.html',
    styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
    bookings: any[] = [];

    constructor() { }

    ngOnInit(): void {
        // Mock Data
        this.bookings = [
            {
                bookingReference: 'BGE-7829-XJ',
                status: 'CONFIRMED',
                totalAmount: 1798,
                trip: {
                    sourceCity: 'Delhi',
                    destinationCity: 'Lucknow',
                    departureTime: '2023-12-15T22:00:00',
                    bus: { operatorName: 'Baiswara Golden Express' }
                },
                passengers: [
                    { name: 'Rahul Kumar', age: 28, gender: 'Male', seatNumber: 'L3A' },
                    { name: 'Priya Singh', age: 26, gender: 'Female', seatNumber: 'L3B' }
                ]
            }
        ];
    }
}
