import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./auth.css']
})
export class LoginComponent {
    username = '';
    password = '';

    constructor(private authService: AuthService, private router: Router) { }

    onSubmit() {
        this.authService.login(this.username, this.password).subscribe(
            data => {
                this.router.navigate(['/']);
            },
            err => {
                alert("Login Failed");
            }
        );
    }
}
