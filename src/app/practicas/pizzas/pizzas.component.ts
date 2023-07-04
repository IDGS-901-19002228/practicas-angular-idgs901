import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {

  pizzaForm: FormGroup;
  pizzas: any[] = [];

  constructor(private fb: FormBuilder) {
    this.pizzaForm = this.initForm()
  }

  initForm():FormGroup{
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      tel: ['', [Validators.required, Validators.minLength(10)]],
      fecha: ['', [Validators.required]],
      tamano: ['', [Validators.required]],
      peperoni: [false],
      pina: [false],
      champinones: [false],
      cantidad_Pizzas: ['', [Validators.required]]
    });
  }

  onSubmit():void{
    this.obtenerDatos();
  }

  obtenerDatos():void{
    const pizza = {
      nombre:this.pizzaForm.get('nombre')?.value,
      direccion:this.pizzaForm.get('direccion')?.value,
      tel:this.pizzaForm.get('tel')?.value,
      fecha:this.pizzaForm.get('fecha')?.value,
      tamano: this.pizzaForm.get('tamano')?.value,
      peperoni: this.pizzaForm.get('peperoni')?.value,
      pina: this.pizzaForm.get('pina')?.value,
      champinones: this.pizzaForm.get('champinones')?.value,
      cantidad_Pizzas:this.pizzaForm.get('cantidad_Pizzas')?.value
    }
    this.pizzas.push(pizza);
    this.pizzaForm.reset();
  }


  obtenerIngredientes(pizza: any): string {
    const ingredientes: string[] = [];

    if (pizza.peperoni) {
      ingredientes.push('Peperoni');
    }

    if (pizza.pina) {
      ingredientes.push('Piña');
    }

    if (pizza.champinones) {
      ingredientes.push('Champiñones');
    }

    if(ingredientes.length == 0){
      ingredientes.push('Sin ingredientes')
    }

    return ingredientes.join(', ');
  }

  calcularSubtotal(pizza: any): number {
    let subtotal = 0;

    switch (pizza.tamano) {
      case 'Chica':
        subtotal += 40;
        break;
      case 'Mediana':
        subtotal += 80;
        break;
      case 'Grande':
        subtotal += 120;
        break;
    }

    if (pizza.peperoni) {
      subtotal += 10;
    }

    if (pizza.pina) {
      subtotal += 10;
    }

    if (pizza.champinones) {
      subtotal += 10;
    }

    subtotal *= pizza.cantidad_Pizzas;

    return subtotal;
  }

  calcularTotalVentas(): number {
    let totalVentas = 0;

    for (const pizza of this.pizzas) {
      totalVentas += this.calcularSubtotal(pizza);
    }

    return totalVentas;
  }
  
}
