import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './reservation/reservation.component';
import { AjouterReservationComponent } from './ajouter-reservation/ajouter-reservation.component';
import { FiltrageComponent } from './filtrage/filtrage.component';


@NgModule({
  declarations: [
    ReservationComponent,
    AjouterReservationComponent,
    FiltrageComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule
  ]
})
export class ReservationModule { }
