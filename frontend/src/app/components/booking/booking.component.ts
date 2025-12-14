import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Seat {
    no: string;
    booked: boolean;
    price: number;
}

interface Row {
    s1: Seat;
    s2: Seat;
    s3: Seat;
}

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
    tripId: number | null = null;

    // Mock Layout
    lowerDeckRows: Row[] = [];
    selectedSeats: Seat[] = [];
    passengers: any[] = []; // { name, age, gender } for each selected seat

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.tripId = Number(this.route.snapshot.paramMap.get('id'));
        this.generateMockSeats();
    }

    generateMockSeats() {
        // Generate 5 rows of 1+2 seating
        for (let i = 1; i <= 6; i++) {
            this.lowerDeckRows.push({
                s1: { no: `L${i}A`, booked: i === 2, price: 899 },
                s2: { no: `L${i}B`, booked: false, price: 899 },
                s3: { no: `L${i}C`, booked: i === 5, price: 899 }
            });
        }
    }

    isSeatSelected(seat: Seat): boolean {
        return this.selectedSeats.some(s => s.no === seat.no);
    }

    toggleSeat(seat: Seat) {
        if (seat.booked) return;

        if (this.isSeatSelected(seat)) {
            const index = this.selectedSeats.findIndex(s => s.no === seat.no);
            this.selectedSeats.splice(index, 1);
            this.passengers.splice(index, 1);
        } else {
            if (this.selectedSeats.length >= 6) {
                alert("You can select max 6 seats.");
                return;
            }
            this.selectedSeats.push(seat);
            this.passengers.push({ name: '', age: '', gender: '' });
        }
    }

    calculateTotal(): number {
        return this.selectedSeats.reduce((acc, s) => acc + s.price, 0);
    }

    confirmBooking() {
        // Need proper validation here
        console.log('Booking Confirmed', {
            tripId: this.tripId,
            seats: this.selectedSeats,
            passengers: this.passengers
        });
        alert(`Booking Confirmed for ${this.selectedSeats.length} seats! Total: ₹${this.calculateTotal()}`);
    }
}
