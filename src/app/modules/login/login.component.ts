import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  loginForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    const user = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    if (user === 'natha@gmail.com' && password === '123123') {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.loginForm.setErrors({ invalid: true });
    }
  }
}
