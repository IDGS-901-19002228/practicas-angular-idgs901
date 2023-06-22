import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResistenciasComponent } from './practicas/resistencias/resistencias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciasModule } from './practicas/distancias/distancias/distancias.module';
import { ResistenciasModule } from './practicas/resistencias/resistencias/resistencias.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DistanciasModule,
    ResistenciasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
