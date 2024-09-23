import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pswd',
  templateUrl: './reset-pswd.page.html',
  styleUrls: ['./reset-pswd.page.scss'],
})

export class ResetPswdPage implements OnInit {
  resetPasswordForm: FormGroup;
  passwordsDoNotMatch: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    // Crear el formulario con validaciones
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],  // Validación para correo electrónico
      newPassword: ['', [Validators.required, Validators.minLength(6)]],  // Nueva contraseña
      confirmPassword: ['', [Validators.required]],  // Confirmar contraseña
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    const newPassword = this.resetPasswordForm.get('newPassword')?.value;
    const confirmPassword = this.resetPasswordForm.get('confirmPassword')?.value;

    // Validar si las contraseñas coinciden
    if (newPassword !== confirmPassword) {
      this.passwordsDoNotMatch = true;
    } else {
      this.passwordsDoNotMatch = false;
      // Aquí puedes añadir la lógica para cambiar la contraseña en tu sistema
      console.log('Formulario enviado con éxito:', this.resetPasswordForm.value);
      // Ejemplo: Enviar los datos a un servicio para actualizar la contraseña
    }
  }

  ngOnInit() {
  }

}
