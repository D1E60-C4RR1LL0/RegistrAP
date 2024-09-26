import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userName: string = '';
  userRole: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // Este método se ejecuta cada vez que la página esté a punto de cargarse o mostrarse.
    this.cargarUsuario();
  }

  cargarUsuario() {
    const userEmail = localStorage.getItem('userEmail');


    
    if (userEmail === 'julioprofe@duoc.cl') {
      this.userName = 'Julio';
      this.userRole = 'profesor';
    }else if (userEmail === 'jose.vidal@duocuc.cl'){
      this.userRole = 'alumno';
      this.userName = 'Josefa Vidal';
    }else if (userEmail === 'dani.perez@duocuc.cl'){
      this.userRole = 'alumno';
      this.userName = 'Daniel Perez';
    }
  }
  

  logout() {
    //localStorage.removeItem('userEmail'); 
    this.router.navigate(['/login']);
  }

}
