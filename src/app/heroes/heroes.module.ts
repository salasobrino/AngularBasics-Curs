import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.components';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent /* lo que queremos que se vea fuera */
  ],
  imports: [
    CommonModule /* amb aquesta directiva funciona el "ngFor, ngIf, etc" */
  ]

})

export class HeroesModule {}
