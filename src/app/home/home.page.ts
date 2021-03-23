import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private importantes=[
    {
      id:'1',
      titulo:'Tarea Martes',
      contenido: 'Tipos de Licencias'
    },
    {
      id:'2',
      titulo:'Tarea Jueves',
      contenido: 'PSR12'
    }
  ]

  constructor() {}

}
