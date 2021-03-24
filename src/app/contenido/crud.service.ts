import { Injectable } from '@angular/core';
import { nota } from '../contenido/nota.model';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private importantes: nota[] = [
    {
      id: '1',
      titulo: 'Tarea Martes',
      contenido: 'Tipos de Licencias',
    },
    {
      id: '2',
      titulo: 'Tarea Jueves',
      contenido: 'PSR12',
    },
    {
      id: '3',
      titulo: 'Sitio Web Colores css',
      contenido: 'Link: coolors.co',
    },
  ];

  constructor() {}

  agregarImportante(titulo: string, contenido: string) {
    this.importantes.push({
      id: this.importantes.length + 1 + '',
      titulo,
      contenido,
    });
  }

  obtenerImportante(importanteId: string) {
    return {
      ...this.importantes.find((importante) => {
        return importante.id === importanteId;
      }),
    };
  }

  obtenerImportantes() {
    return [...this.importantes];
  }

  eliminarImportante(importanteId: string) {
    this.importantes = this.importantes.filter((importante) => {
      return importante.id !== importanteId;
    });
  }
}
