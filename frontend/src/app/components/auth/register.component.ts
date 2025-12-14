import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./auth.css']
})
export class RegisterComponent {
    form: any = {
        username: null,
        email: null,
        password: null
    };

    constructor(private authService: AuthService, private router: Router) { }

    onSubmit() {
        this.authService.register(this.form).subscribe(
            data => {
                alert("Registration Successful");
                this.router.navigate(['/login']);
            },
            err => {
                alert("Registration Failed");
            }
        );
    }
}
