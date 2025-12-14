export interface Trip {
    id: number;
    sourceCity: string;
    destinationCity: string;
    departureTime: string;
    arrivalTime: string;
    fare: number;
    bus: {
        code: string;
        type: string;
        operatorName: string;
    };
}

export interface User {
    id: number;
    username: string;
    email: string;
    roles: string[];
}

export interface Booking {
    tripId: number;
    passengers: Passenger[];
}

export interface Passenger {
    name: string;
    age: number;
    gender: string;
    seatNumber: number;
}
