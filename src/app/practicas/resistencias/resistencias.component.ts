import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface FormValues {
  banda1: string;
  banda2: string;
  multiplicador: string;
  tolerancia: string;
}

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})

export class ResistenciasComponent {
  calcular(form: FormValues) {
    const { banda1, banda2, multiplicador, tolerancia } = form;
    const suma =
      (parseInt(banda1) * 10 + parseInt(banda2)) *
      Math.pow(10, parseInt(multiplicador));

    const min = suma - suma * (tolerancia === '1' ? 0.05 : 0.1);
    const max = suma + suma * (tolerancia === '1' ? 0.05 : 0.1);

    return { tot: suma, min, max };
  }

  setColor(color: string) {
    const colores = ['#000000', '#541204', '#E80B2C', '#F48421', '#F4F21E', '#0B9E0B', '#0B3EE8', '#8B0BE8', '#808080', '#FFFFFF'];
    const colorIndex = parseInt(color);
    return colores[colorIndex];
  }

  setTolerancia(color: string) {
    const colores = ['#FFD700', '#C0C0C0'];
    const colorIndex = parseInt(color);
    return colores[colorIndex];
  }

  form: FormGroup = new FormGroup({
    banda1: new FormControl(),
    banda2: new FormControl(),
    multiplicador: new FormControl(),
    tolerancia: new FormControl()
  });

  enviar() {
    this.form = new FormGroup({
      banda1: new FormControl(),
      banda2: new FormControl(),
      multiplicador: new FormControl(),
      tolerancia: new FormControl()
    });
  }

  res: any; 
  banda1: any; 
  banda2: any; 
  multiplicador: any; 
  tolerancia: any; // Declaración de la propiedad res

  //Antes llamado onSubmit()
  mostrar() {
    if (this.form.valid) {
      const resistencia = new ResistenciasComponent();
      const { banda1, banda2, multiplicador, tolerancia } = this.form.value;
      this.res = resistencia.calcular({ banda1, banda2, multiplicador, tolerancia });
      this.banda1 = resistencia.setColor(banda1);
      this.banda2 = resistencia.setColor(banda2);
      this.multiplicador = resistencia.setColor(multiplicador);
      this.tolerancia = resistencia.setTolerancia(tolerancia);
    }
  }

}
