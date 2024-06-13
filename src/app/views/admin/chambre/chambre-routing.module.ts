import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambresComponent } from './chambres/chambres.component';
import { AjouterChambreComponent } from './ajouter-chambre/ajouter-chambre.component';
import { ModifierChambreComponent } from './modifier-chambre/modifier-chambre.component';

const routes: Routes = [
  { path: '', component: ChambresComponent },
  { path: 'Ajouter', component: AjouterChambreComponent },
  { path: 'Modifier/:idChambre/:numeroChambre/:typeChambre', component: ModifierChambreComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }
