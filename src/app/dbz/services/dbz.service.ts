import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable() //Lo que marca la diferencia entre cualquier clase es este decorador
// lo que dice este decorador es que esta clase se podrá inyectar fuera
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes]; // video 66 ver en la parte 7:26 lo explica
  }

  constructor() { }

  //Creamos método para añadir personajes

  agregarPersonaje( personaje: Personaje ) {
    this._personajes.push( personaje );
  }

}
