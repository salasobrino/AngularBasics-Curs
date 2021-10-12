import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/* import { ContadorComponent } from './contador/contador/contador.component'; */
// Tarea:
// Crear un módulo llamado ContadorModule
// Hacer las: declaraciones y exportaciones


import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/ListadoCont/contador.module';


@NgModule({
  declarations: [
    AppComponent,
  /*   ContadorComponent, */

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule// importar aquí Tarea Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
