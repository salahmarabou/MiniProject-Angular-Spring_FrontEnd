import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/Model/Bloc';
import { Chambre } from 'src/app/Model/Chambre';
import { TypeChambre } from 'src/app/Model/TypeChambre';
import { ChambreService } from 'src/app/service/chambre.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-chambre',
  templateUrl: './ajouter-chambre.component.html',
  styleUrls: ['./ajouter-chambre.component.css']
})
export class AjouterChambreComponent implements OnInit {

  selectedBloc : Bloc=null
  blocs :Bloc[]=[]

  chambre: Chambre = {
    idChambre: 0,
    numeroChambre: 0,
    typeChambre: TypeChambre.SIMPLE, // Set the typeChambre to an initial value
    bloc: this.selectedBloc
  };
  numericPattern = '^[0-9]*$';
  InvalideMessage:boolean = false;

  constructor(private chambreService: ChambreService, private router: Router) { }

  ngOnInit(): void {
    // Additional initialization logic if needed
    this.getAllblocs();
  }

  getAllblocs(){
      this.chambreService.getAllBlocs().subscribe((data : Bloc[])=>{
      
        this.blocs = data;
        
        console.log( "salah",this.blocs);
  
  
      })
    
  
  }

  

  saveChambre() {
   
         this.chambre.bloc=this.selectedBloc;
         this.chambre.numeroChambre+=1;
    this.chambreService.createChambre(this.chambre).subscribe(
          () => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Chambre ajouter avec succées',
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigate(['admin/chambre']);
          },
          (error: HttpErrorResponse) => {
            console.error('Error adding foyer:', error);
          }
        );
      
      }
    }
  

 

