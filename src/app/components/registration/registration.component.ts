import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})

export class RegisterComponent {
  registerData = { username: '', email: '', password: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.registerData.username && this.registerData.email && this.registerData.password) {
      localStorage.setItem('currentUser', JSON.stringify({ email: this.registerData.email, password: this.registerData.password }));
      this.successMessage = 'Registration successful!';
      this.errorMessage = '';
     
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Please fill out all fields.';
    }
  }
}
