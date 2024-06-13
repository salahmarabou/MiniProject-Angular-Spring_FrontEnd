
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from 'src/app/Model/Chambre';
import { ChambreService } from 'src/app/service/chambre.service';
import { Component, OnInit } from "@angular/core";
import { TypeChambre } from 'src/app/Model/TypeChambre';
import { Bloc } from 'src/app/Model/Bloc';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';





@Component({
  selector: 'app-modifier-chambre',
  templateUrl: './modifier-chambre.component.html',
  styleUrls: ['./modifier-chambre.component.css']
})
export class ModifierChambreComponent implements OnInit {
  selectedBloc : Bloc= null
  blocs :Bloc[]=[]
  
  chambre: Chambre = {
    idChambre: 0,
    numeroChambre: 0,
    typeChambre: TypeChambre.SIMPLE, // Set the typeChambre to an initial value
    bloc: this.selectedBloc
  };
  numericPattern = '^[0-9]*$';
  InvalideMessage:boolean = false;
  constructor(private route: ActivatedRoute,private chambreService: ChambreService,private router: Router) { }

  ngOnInit(): void {
    this.getAllblocs();

    this.route.params.subscribe(params => {
      this.chambre.idChambre = +params['idChambre'];
      this.chambre.numeroChambre = +params['numeroChambre'];
      this.chambre.typeChambre = params['typeChambre'];
      // this.selectedBloc.idBloc =params['idbloc'];
      // this.selectedBloc.nomBloc =params['nomBloc'];
      // this.selectedBloc.idBloc =params['capaciteBloc'];

    });
    
    const blocData = localStorage.getItem("blocs");
    if(blocData){
      const blocStorage = JSON.parse(blocData);
      this.selectedBloc=blocStorage;
      console.log("waywa",this.selectedBloc);
    }
  }

  getAllblocs(){
    this.chambreService.getAllBlocs().subscribe((data : Bloc[])=>{
    
      this.blocs = data;
      
      console.log( "salah",this.blocs);


    })
  

}


updateChambre() {
  console.log(this.chambre);
  this.chambre.bloc = this.selectedBloc;

  this.chambreService.updateChambre(this.chambre).subscribe(
    (res: Chambre) => {
      localStorage.clear();

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Chambre modifiée avec succès',
        showConfirmButton: false,
        timer: 1500,
        iconColor: '#ffd700', // Couleur jaune en code hexadécimal
      });

      this.router.navigate(['admin/chambre']);
    },
    (error: HttpErrorResponse) => {
      console.error('Erreur lors de la modification de la chambre:', error);
    }
  );
}







  /*updateChambre() {
  //  console.log(this.chambre)
 //   this.chambre.bloc=this.selectedBloc;
 //   this.chambreService.updateChambre(this.chambre).subscribe(
   //   (res: Chambre) => {
     //   localStorage.clear();
      //  this.router.navigate(['admin/chambre']);
      //  console.log('etudiant Modifier Avec succées:', res);
        
        // Handle success, update UI, or show a success message to the user
     /* },
      (error) => {
        console.error('Error modifier foyer :', error);
        // Handle error, show an error message to the user
      }
    );
    }*/


  
}
