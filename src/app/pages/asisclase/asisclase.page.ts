import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asisclase',
  templateUrl: './asisclase.page.html',
  styleUrls: ['./asisclase.page.scss'],
})
export class AsisclasePage implements OnInit {
  asistencias: { nombre: string, asignatura: string, fecha: string, hora: string, contador: number }[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const nombre = params['nombre'];
      const asignatura = params['asignatura'];


      if (nombre && asignatura) {
        this.registrarAsistencia(nombre, asignatura);
      }
    });
  }

  registrarAsistencia(nombre: string, asignatura: string) {
    const asistenciaExistente = this.asistencias.find(a => a.nombre === nombre);

    if (asistenciaExistente){
      asistenciaExistente.contador++;
    }else{
    const nuevaAsistencia = {
      nombre: nombre,
      asignatura: asignatura,
      fecha: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString(),
      contador: 1
    };

    this.asistencias.push(nuevaAsistencia);
    }
  }
}