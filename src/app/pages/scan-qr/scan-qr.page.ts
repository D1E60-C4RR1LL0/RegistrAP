import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage implements OnInit {
  registroExitoso: boolean = false;

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

   // Método para registrar la asistencia
  registrarAsistencia() {
    // Aquí puedes agregar la lógica para obtener los datos de nombre y asignatura del escaneo QR o manualmente
    const nombre = 'Alumno Ejemplo';
    const asignatura = 'Matemáticas';

    // Navegar a la página de asistencia y pasar los datos usando NavController
    this.navCtrl.navigateForward('/asisclase', {
      queryParams: {
        nombre: nombre,
        asignatura: asignatura
      }
    });

    this.registroExitoso = true;
  }


}
