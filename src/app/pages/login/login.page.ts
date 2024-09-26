import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private toastController: ToastController) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    
    if ((email === 'julioprofe@duoc.cl' && password === 'abc123') ||
        (email === 'jose.vidal@duocuc.cl' && password === 'abc123') ||
        (email === 'dani.perez@duocuc.cl' && password === 'abc123')) {

      localStorage.setItem('userEmail', email);

      this.router.navigate(['/home']);
    } else {
      // Mostrar el Toast
      this.presentToast('Correo o Contraseña inválidas. Inténtalo de nuevo.');
    }
  }

  // Método del Toast
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      position: 'top',
      color: 'danger'
    });
    await toast.present();
  }
}