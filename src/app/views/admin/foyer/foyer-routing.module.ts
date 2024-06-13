import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { RouterModule, Routes } from '@angular/router';
import { FoyerComponent } from './foyer/foyer.component';
import { AjouterFoyerComponent } from './ajouter-foyer/ajouter-foyer.component';

const routes: Routes = [  {path: "", component: FoyerComponent},
{ path: 'AjouterFoyer', component: AjouterFoyerComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyerRoutingModule { }
