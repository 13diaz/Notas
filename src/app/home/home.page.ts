import { CrudService } from '../contenido/crud.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  importantes = [];

  constructor(private crudServicio: CrudService, private router: Router) {}

  ngOnInit() {
    this.importantes = this.crudServicio.obtenerImportantes();
  }

  ionViewWillEnter() {
    this.importantes = this.crudServicio.obtenerImportantes();
  }

  agregarNuevaNota() {
    this.router.navigate(['../formulario'])
  }
}
