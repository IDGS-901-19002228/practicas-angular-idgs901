import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CineComponent } from '../cine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CineComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CineComponent
  ]
})
export class CineModule { }
