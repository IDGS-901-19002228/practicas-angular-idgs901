import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciasModule } from './practicas/distancias/distancias/distancias.module';
import { ResistenciasModule } from './practicas/resistencias/resistencias/resistencias.module';
import { MenuComponent } from './practicas/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { PizzasModule } from './practicas/pizzas/pizzas/pizzas.module';
import { CineModule } from './practicas/cine/cine/cine.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DistanciasModule,
    ResistenciasModule,
    AppRoutingModule,
    PizzasModule,
    CineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
