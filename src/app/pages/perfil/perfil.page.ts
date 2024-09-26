import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userName: string = '';
  userRole: string = '';
  userImg: string ='';

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // Cargar los datos cada vez que se muestra la página de perfil
    this.cargarDatosPerfil();
  }

  cargarDatosPerfil() {    
    const userEmail = localStorage.getItem('userEmail');

    if (userEmail === 'julioprofe@duoc.cl'){
      this.userName = 'Julio';
      this.userRole = 'Profesor';
      this.userImg = "../../../assets/icon/JulioProfe.jpg";
    } else if (userEmail === 'jose.vidal@duocuc.cl'){
      this.userName = 'Josefa Vidal';
      this.userRole = 'Estudiante';
      this.userImg = "../../../assets/icon/Josefa.jpg";
    } else if (userEmail === 'dani.perez@duocuc.cl'){
      this.userName = 'Daniel Perez';
      this.userRole = 'Estudiante';
      this.userImg = "../../../assets/icon/Daniel.jpg";
    } else if (userEmail === 'admin@admin.admin'){
      this.userName = 'Admin';
      this.userRole = 'Admin';
      this.userImg = "https://ionicframework.com/docs/img/demos/avatar.svg";
    }
}
}
