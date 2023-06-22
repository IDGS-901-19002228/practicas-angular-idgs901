import { Component } from '@angular/core';

@Component({
  selector: 'app-distancias',
  templateUrl: './distancias.component.html',
  styleUrls: ['./distancias.component.css']
})
export class DistanciasComponent {

  x!:number
  y!:number
  
  x1!:number
  y1!: number
  x2!:number
  y2!:number
  resultado!:number

  calcularDistancias(){
    
    this.x = this.x1 - this.x2;
    this.y = this.y1 - this.y2;
    this.resultado = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))

  }

}
