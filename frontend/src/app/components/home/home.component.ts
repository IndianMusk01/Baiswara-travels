import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    source: string = '';
    destination: string = '';
    date: Date = new Date();

    constructor(private router: Router) { }

    searchBuses() {
        this.router.navigate(['/buses'], {
            queryParams: {
                source: this.source,
                destination: this.destination,
                date: this.date.toISOString().split('T')[0]
            }
        });
    }
}
