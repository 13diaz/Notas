import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CrudService } from './crud.service';
import { nota } from './nota.model';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {
  importante: nota;

  constructor(
    private revisarRuta: ActivatedRoute,
    private crudServivio: CrudService,
    private router: Router,
    private mensajeAlert: AlertController
  ) {}

  ngOnInit() {
    this.revisarRuta.paramMap.subscribe((paramMap) => {
      const idRecibida = paramMap.get('importanteId');
      this.importante = this.crudServivio.obtenerImportante(idRecibida);
    });
  }

  async eliminarNota() {
    const alertaEliminar = await this.mensajeAlert.create({
      header: 'Esta segur@ de eliminar esta tarea?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.crudServivio.eliminarImportante(this.importante.id);
            this.router.navigate(['/home']);
          },
        },
      ],
    });
    await alertaEliminar.present();
  }
}
