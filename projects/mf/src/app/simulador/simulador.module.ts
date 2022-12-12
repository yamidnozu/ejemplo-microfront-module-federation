import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimuladorRoutingModule } from './simulador-routing.module';
import { SimuladorComponent } from './simulador.component';


@NgModule({
  declarations: [
    SimuladorComponent
  ],
  imports: [
    CommonModule,
    SimuladorRoutingModule
  ]
})
export class SimuladorModule { }
