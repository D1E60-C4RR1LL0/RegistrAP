import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asisclase',
  templateUrl: './asisclase.page.html',
  styleUrls: ['./asisclase.page.scss'],
})
export class AsisclasePage implements OnInit {
  asistencias: { nombre: string,
  asignatura: string,
  fecha: string,
  hora: string }[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
this.route.queryParams.subscribe(params=>{
  const nombre = params['nombre'];
  const asignatura = params['asignatura'];

  if (nombre && asignatura) {
    this.agregarAsistencia(nombre,asignatura);
    }
  });  
}
  agregarAsistencia(nombre: string, asignatura: string){
    const fechaActual = new Date();
    const nuevaAsistencia = {
      nombre: nombre,
      asignatura: asignatura,
      fecha: fechaActual.toLocaleDateString(),
      hora: fechaActual.toLocaleTimeString()
    };

    this.asistencias.push(nuevaAsistencia);
  }
}
