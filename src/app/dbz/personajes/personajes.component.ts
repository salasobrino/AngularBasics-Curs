import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {

  /* @Input() //estos personajes van a venir del componente padre
  personajes: Personaje[] = [];   //comunicación padre a hijo
  // Este input viene des del componente padre */

  get personajes(){
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService ) { }

}
