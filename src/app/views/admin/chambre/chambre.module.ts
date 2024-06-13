import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambreRoutingModule } from './chambre-routing.module';
import { ChambresComponent } from './chambres/chambres.component';
import { AjouterChambreComponent } from './ajouter-chambre/ajouter-chambre.component';
import { FormsModule } from '@angular/forms';
import { ModifierChambreComponent } from './modifier-chambre/modifier-chambre.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ViewChambreComponent } from './view-chambre/view-chambre.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { MadirectiveDirective } from './chambres/madirective.directive';




@NgModule({
  declarations: [
    ChambresComponent,
    AjouterChambreComponent,
    ModifierChambreComponent,
    ViewChambreComponent,
    MadirectiveDirective,
    
    
  ],
  imports: [
    CommonModule,
    ChambreRoutingModule,FormsModule,Ng2SearchPipeModule,MatDialogModule,NgxPaginationModule,
  ]
})
export class ChambreModule { }
