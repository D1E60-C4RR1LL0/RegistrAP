import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    // Aquí puedes agregar tu lógica de autenticación.
    // Este es un ejemplo básico que valida el email y password de manera local.
    if (email === 'profesor@duocuc.cl' && password === 'abc123') {
      // Si la validación es exitosa, redirige a la página de inicio
      this.router.navigate(['/home']);
    } else {
      // En caso de fallo en la autenticación
      alert('Invalid credentials');
    }
  }
}
