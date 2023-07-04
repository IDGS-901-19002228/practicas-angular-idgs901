import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { DistanciasComponent } from "./practicas/distancias/distancias.component";
import { ResistenciasComponent } from "./practicas/resistencias/resistencias.component";
import { PizzasComponent } from "./practicas/pizzas/pizzas.component";
import { CineComponent } from "./practicas/cine/cine.component";

const routes:Routes=[
    {path: '',redirectTo: '/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'DistanciasComponent', component: DistanciasComponent },
    {path: 'ResistenciasComponent', component: ResistenciasComponent },
    {path: 'PizzasComponent', component: PizzasComponent },
    {path: 'CineComponent', component: CineComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{}
