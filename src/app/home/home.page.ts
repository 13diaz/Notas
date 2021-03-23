import { CrudService } from '../contenido/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  importantes = [];

  constructor(private crudServicio: CrudService) {}

  ngOnInit() {
    this.importantes = this.crudServicio.obtenerImportantes();
  }

  ionViewWillEnter() {
    this.importantes = this.crudServicio.obtenerImportantes();
  }
}
