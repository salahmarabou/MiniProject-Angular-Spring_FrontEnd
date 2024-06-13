import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { FoyerRoutingModule } from './foyer-routing.module';
import { FoyerComponent } from './foyer/foyer.component';
import { FormsModule } from '@angular/forms';
import { AjouterFoyerComponent } from './ajouter-foyer/ajouter-foyer.component';



@NgModule({
  declarations: [
    FoyerComponent,
    AjouterFoyerComponent
  ],
  imports: [
    CommonModule,
    FoyerRoutingModule,MatIconModule,FormsModule
  ]
})
export class FoyerModule { }
