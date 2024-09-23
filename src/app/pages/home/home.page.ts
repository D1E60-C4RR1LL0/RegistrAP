import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userRole: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    const userEmail = localStorage.getItem('userEmail');

    if (userEmail =='profesor@duocuc.cl'){
      this.userRole = 'profesor';
    }else if (userEmail == 'alumno@duocuc.cl'){
      this.userRole = 'alumno'
    }
  }


  logout() {
    // Lógica para cerrar sesión
    localStorage.removeItem('userToken');  // Por ejemplo, eliminar el token de autenticación
    sessionStorage.clear();  // Limpiar toda la sesión, si es necesario

    // Redirigir a la página de login
    this.router.navigate(['/login']);
  }

}
