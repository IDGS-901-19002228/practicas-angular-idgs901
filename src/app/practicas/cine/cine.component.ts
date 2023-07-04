import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {

  cineForm: FormGroup;
  cines: any[] = [];

  constructor(private fb: FormBuilder) {
    this.cineForm = this.initForm()
  }

  initForm():FormGroup{
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      cantidad_Boletos: ['', [Validators.required, Validators.maxLength(7)]],
      tarjeta: ['', [Validators.required]],
    });
  }

  onSubmit():void{
    this.obtenerDatos();
  }

  obtenerDatos():void{
    const cine = {
      nombre:this.cineForm.get('nombre')?.value,
      cantidad_Boletos:this.cineForm.get('cantidad_Boletos')?.value,
      tarjeta: this.cineForm.get('tarjeta')?.value    
    }
    this.cines.push(cine);
    this.cineForm.reset();
  }

  calcularDescuento(cine: any): number{
    let cantidad_Boletos: number = cine.cantidad_Boletos;
    //let total_descuento=0;
    let descuento: number = 0;
    const precioBoleto: number = 12000;
    let total!: number;

    if(cantidad_Boletos > 7){
      alert('No se pueden comprar mas de 7 boletos por persona');
    }
    else if(cantidad_Boletos > 5){
      descuento = 0.15;
    }
    else if(cantidad_Boletos >= 3){
      descuento = 0.1;
    }

    let totalSinDescuento: number = cantidad_Boletos * precioBoleto;
    let totalConDescuento: number = totalSinDescuento - (totalSinDescuento * descuento);
    
    if(cine.tarjeta == 'Si'){
      const descuentoCine: number = 0.1;
      totalConDescuento -= totalConDescuento * descuentoCine;
    }
    if(cine.tarjeta == 'No'){
      totalConDescuento;
    }
    
    return total = totalConDescuento;
  }




}
