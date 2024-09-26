import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-reset-pswd',
  templateUrl: './reset-pswd.page.html',
  styleUrls: ['./reset-pswd.page.scss'],
})
export class ResetPswdPage implements OnInit {
  resetPasswordForm!: FormGroup;
  passwordsDoNotMatch: boolean = false;

  constructor(private formBuilder: FormBuilder, private toastController: ToastController) {}

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],  
      newPassword: ['', [Validators.required, Validators.minLength(6)]],  
      confirmPassword: ['', [Validators.required]]  
    });

    this.resetPasswordForm.valueChanges.subscribe(() => {
      const newPassword = this.resetPasswordForm.get('newPassword')?.value;
      const confirmPassword = this.resetPasswordForm.get('confirmPassword')?.value;

      this.passwordsDoNotMatch = newPassword !== confirmPassword;
    });
  }

  onSubmit() {
    if (!this.passwordsDoNotMatch && this.resetPasswordForm.valid) {
  // Mostrar el Toast
      this.presentToast('Se ha enviado un correo para reestablecer tu contraseña');
    }
  }

  // Método del Toast
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: 'success'
    });
    await toast.present();
  }
}
