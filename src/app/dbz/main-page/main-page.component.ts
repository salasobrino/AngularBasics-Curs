import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

/* interface Personaje {
  nombre: string;
  poder: number;
} */

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'

})
export class MainPageComponent  {

  /* personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]; */

  /* nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {

    if ( this.nuevo.nombre.trim().length === 0 ) {
      return;  // se trata de una validación automática
    }

    console.log( this.nuevo );

    this.personajes.push( this.nuevo ); // se inserta en el arreglo
    this.nuevo = {
      nombre: '',
      poder: 0
    } // actualizo a cero
  } */

  //para resolver que me marca error personajes
  //
  //personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  /* get personajes(): Personaje[] {
    return this.dbzService.personajes;
  } */

/*   agregarNuevoPersonaje( argumento: Personaje){

   // console.log( argumento ); //podemos observar que todo va bien. Entonces...
    this.personajes.push( argumento );

  } */

  /* constructor( private dbzService: DbzService) {  // esto es un ejemplo de inyección de dependencias

    // lo que quiere decir es que cuando se crea el componente
    // voy a asignar igual al valor del servicio de la parte de los personajes
    //this.personajes = this.dbzService.personajes; // borramos la linea que ya sabemos que funciona
    // lo solucionamos con un "getter"
  } */

  constructor() { }

}
