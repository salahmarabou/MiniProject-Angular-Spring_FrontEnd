  import { Component,OnInit } from '@angular/core';
  import { FoyerService } from '../../../../service/foyer.service';
  import { Foyer } from '../../../../Model/Foyer';
  import { Universite } from '../../../../Model/Universite';

  @Component({
    selector: 'app-ajouter-foyer',
    templateUrl: './ajouter-foyer.component.html',
    styleUrls: ['./ajouter-foyer.component.css']
  })
  export class AjouterFoyerComponent implements OnInit  {



    Foyers: Foyer[] = [];
    Universites: Universite[] = [];
    selectedUniversite: Universite; // Declare selectedUniversite property

    constructor(private ServiceFoyer:FoyerService){}

    ngOnInit(): void {
      this.getAllUniversites();
      console.log(this.Universites);
    
    }

    getAllUniversites() {
      this.ServiceFoyer.getAllUniversite().subscribe((data: Universite[]) => {
        this.Universites = data;
      });
    }

    ajouterFoyer(){
      alert(this.selectedUniversite.idUniversite +' '+ this.selectedUniversite.adresse+' '+this.selectedUniversite.nomUniversite )
    }
  }
