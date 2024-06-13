import { Component,OnInit  } from '@angular/core';
import { FoyerService } from '../../../../service/foyer.service';
import { Foyer } from '../../../../Model/Foyer';
import { Universite } from '../../../../Model/Universite';
import { Bloc } from '../../../../Model/Bloc';

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.css']
})
export class FoyerComponent implements OnInit  {
  //initialiser une liste de type foyer
  foyer: Foyer[] = [];
  //initialiser une liste de type bloc
  bloc:Bloc[]=[]

  searchText = '';

  constructor( private ServiceFoyer:FoyerService) { }

  ngOnInit(): void {
    console.log("all data ");
    
    this.getAllFoyers();

  }

//pour get liste de foyer
  getAllFoyers(){
    this.ServiceFoyer.getAllFoyers().subscribe((data : Foyer[])=>{
      console.log("all data ",data);
    
      this.foyer = data;
      console.log(this.foyer);

    })
  }

  //pour supprimer une foyer
  deleteFoyer(id){
    if (confirm("Voulez vous vraiment supprimer ce foyer ?")) {
      this.ServiceFoyer.deleteFoyer(id).subscribe(() => {
        alert('Suppression effectuée avec succés');
        window.location.reload();
        });
  }
  
  }
  //pour afficher ajouter liste de bloc de foyer en parametre 
  showlistebloc(f:any){
  console.log(f)
  this.bloc=f.blocs  
  console.log(this.bloc)


  }



}


