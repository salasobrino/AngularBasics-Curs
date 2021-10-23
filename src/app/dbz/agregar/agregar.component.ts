import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {

 /*  @Input() personajes: Personaje[] = []; */

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // Como hago para conectar el método agregar de personaje.component a agregar de agregar.component?
  constructor( private dbzService: DbzService ) {
    // ahora ya pueda inyectar todo lo de "dbzService" dentro de "agregar.component"
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {

    if ( this.nuevo.nombre.trim().length === 0 ) {
      return;  // se trata de una validación automática
    }

    //this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonaje( this.nuevo )

   /*  this.personajes.push( this.nuevo ); */ // se inserta en el arreglo
    this.nuevo = {
      nombre: '',
      poder: 0
    } // actualizo a cero
  }


}
