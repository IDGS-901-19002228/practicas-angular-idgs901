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
  showAlert = false;
  alertType: 'success' | 'error' = 'success';

  constructor(private fb: FormBuilder) {
    this.cineForm = this.initForm()
  }

  initForm():FormGroup{
    
    return this.fb.group({
      cantidad_compradores: ['',[Validators.required]],
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      cantidad_Boletos: ['', [Validators.required]],
      tarjeta: ['', [Validators.required]]
    });
  }

  onSubmit():void{
    this.obtenerDatos();
  }

  obtenerDatos():void{
    const cine = {
      cantidad_compradores: this.cineForm.get('cantidad_compradores')?.value,
      nombre:this.cineForm.get('nombre')?.value,
      cantidad_Boletos:this.cineForm.get('cantidad_Boletos')?.value,
      tarjeta: this.cineForm.get('tarjeta')?.value
    }
    // this.cines.push(cine);
    // this.cineForm.reset();
    const total = this.calcularDescuento(cine);
    if (total > 0) {
      this.cines.push(cine);
      this.showAlert = true;
      this.alertType = 'success';
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
    } else {
      this.showAlert = true;
      this.alertType = 'error';
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
    }

    this.cineForm.reset();
  }

  calcularDescuento(cine: any): number{
    const precioBoleto: number = 12000;

    let cantidad_Boletos: number = cine.cantidad_Boletos;
    let cantidad_compradores: number = cine.cantidad_compradores;
    let descuento: number = 0;
    let totalFinal!: number;
    let total!: number;
    
    let limiteBoletos = cantidad_compradores * 7;

    if(cantidad_Boletos <= limiteBoletos){
      if(cantidad_Boletos > 5){
        descuento = 0.15;
      }
      else if(cantidad_Boletos >= 3){
        descuento = 0.10;
      }

      let totalSinDescuento: number = cantidad_Boletos * precioBoleto;
      let totalConDescuento: number = totalSinDescuento - (totalSinDescuento * descuento);
      
      if(cine.tarjeta == 'Si'){
        const descuentoTarjeta: number = 0.1;
        totalConDescuento -= totalConDescuento * descuentoTarjeta;
      }
      if(cine.tarjeta == 'No'){
        totalConDescuento;
      }
      return total = totalConDescuento;
    }
    else{
      return 0;
    }
    

    return totalFinal = total;
  
  }// Aqui cierra el metodo de calcular

}// Aqui cierra la clase del componente