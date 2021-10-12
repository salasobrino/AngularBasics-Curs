import { Component } from "@angular/core";

/* Concepto: es mejor trabajar en una sola vía */

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'

})
export class HeroeComponent {

  nombre: string = 'Ironman';
  edad  : number = 45;

  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${ this.nombre } - ${ this.edad }`;
    // els "``" es siuen back ticks. En aquesta cas hem servirán per crear uns templates de les variables escollides"

  }

  cambiarNombre():void {
    this.nombre= 'Sprideraman';
  }

  cambiarEdad():void {
    this.edad = 30;
  }

}
