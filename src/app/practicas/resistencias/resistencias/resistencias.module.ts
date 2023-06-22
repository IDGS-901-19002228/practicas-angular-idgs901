import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ResistenciasComponent } from '../resistencias.component';



@NgModule({
  declarations: [
    ResistenciasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    ResistenciasComponent
  ]
})
export class ResistenciasModule { }
