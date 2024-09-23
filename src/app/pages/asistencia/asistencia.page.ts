import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

   // Lista para almacenar las asistencias
  asistencias: { nombre: string, asignatura: string, fecha: string, hora: string }[] = [];
  constructor(private route: ActivatedRoute) {}


  agregarAsistencia(nombre: string, asignatura: string) {
    const fechaActual = new Date();
    const nuevaAsistencia = {
      nombre: nombre,
      asignatura: asignatura,
      fecha: fechaActual.toLocaleDateString(),
      hora: fechaActual.toLocaleTimeString()
    };

    // Agregar la asistencia a la lista
    this.asistencias.push(nuevaAsistencia);
  }  

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const nombre = params['nombre'];
      const asignatura = params['asignatura'];

      if (nombre && asignatura) {
        this.agregarAsistencia(nombre, asignatura);
      }
    });
  }

}
