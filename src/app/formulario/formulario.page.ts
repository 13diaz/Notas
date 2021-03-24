import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../contenido/crud.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  constructor(private crudServicio: CrudService, private router: Router) {}

  ngOnInit() {}

  guardarNuevaNota(titulo, contenido) {
    this.crudServicio.agregarImportante(titulo.value, contenido.value);
    this.router.navigate(['../home']);
  }
}
