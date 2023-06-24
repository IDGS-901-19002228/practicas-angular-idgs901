import { Component } from '@angular/core';


@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})

export class ResistenciasComponent {

  tot!: number;
  min!: number;
  max!: number;
  banda1!: string;
  banda2!: string;
  multiplicador!: string;
  tolerancia!: string;
  Colores: boolean = false;

  operacionSeleccionada: string = 'Dorado';
  tipoOperaciones = ['Dorado', 'Plata'];



  calcularResistencia() {
    const banda1Value = parseInt(this.banda1);
    const banda2Value = parseInt(this.banda2);
    const multiplicadorValue = parseInt(this.multiplicador);

    this.tot = (banda1Value * 10 + banda2Value) * Math.pow(10, multiplicadorValue);

    switch (this.operacionSeleccionada) {
      case 'Dorado':
        this.min = this.tot - (this.tot * 0.05);
        this.max = this.tot + (this.tot * 0.05);
        break;
      case 'Plata':
        this.min = this.tot - (this.tot * 0.1);
        this.max = this.tot + (this.tot * 0.1);
        break;
    }

    this.Colores = true;
  }
  

  mostrarColor(color: string): string {
    const colores: { [key: string]: string } = {
      '0': '#000000',
      '1': '#541204',
      '2': '#E80B2C',
      '3': '#F48421',
      '4': '#F4F21E',
      '5': '#0B9E0B',
      '6': '#0B3EE8',
      '7': '#8B0BE8',
      '8': '#808080',
      '9': '#FFFFFF'
    };

    return colores[color];
  }

  colorTolerancia(color: string): string {
    const colores: { [key: string]: string } = {
      'Dorado': '#efb810',
      'Plata': '#C0C0C0'
    };

    return colores[color];
  }

}
