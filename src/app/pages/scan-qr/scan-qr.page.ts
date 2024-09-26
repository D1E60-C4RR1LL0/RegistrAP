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
    const userEmail = localStorage.getItem('userEmail');
    let nombre = '';
    let asignatura = 'Programación';

  if (userEmail === 'jose.vidal@duocuc.cl') {
    nombre = 'Josefa Vidal';
  } else if (userEmail === 'dani.perez@duocuc.cl') {
    nombre = 'Daniel Perez';
  } else if (userEmail === 'admin@admin.admin'){
    nombre = 'Admin;'
  }

  // Navegar a la página de asistencia y pasar los datos
  this.navCtrl.navigateForward('/asisclase', {
    queryParams: {
      nombre: nombre,
      asignatura: asignatura
    }
  });

    this.registroExitoso = true;
  }

}
