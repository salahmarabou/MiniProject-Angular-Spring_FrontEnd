import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, tap } from 'rxjs';
import { Chambre } from 'src/app/Model/Chambre';
import { ChambreService } from 'src/app/service/chambre.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Bloc } from 'src/app/Model/Bloc';
import { ViewChambreComponent } from '../view-chambre/view-chambre.component';
import { MatDialog } from '@angular/material/dialog';
import { PaginationService } from 'ngx-pagination';

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css']
})
export class ChambresComponent implements OnInit {

  observables? : Observable<Chambre[]>;
  chambres? : Chambre[];
  chambreForm: FormGroup;
  private apiServer:String='http://localhost:8080/TpEtudeDeCas/chambre/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

}

nombreChambres: number=0;


title = 'Angular Search Using ng2-search-filter';
  searchText;
  chambre: Chambre[] = [];

 //déclaration pagination 
 p:number = 1 ; 
 POSTS: any;
 page: number = 1;
 count: number = 0;
 tableSize: number = 4;
 tableSizes: any = [5, 10, 15, 20];
postList(): void {
  this.serviceChambre.getAllChambres().subscribe((response) => {
    this.POSTS = response;
    console.log(this.POSTS);
  });
}

onTableDataChange(event: any) {
  this.page = event;
  this.postList();
}

onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.postList();

}
 
  


  constructor(private fb: FormBuilder, private serviceChambre: ChambreService, private _http:HttpClient,private router: Router,private dialog:MatDialog, private paginationService: PaginationService) {
    this.chambreForm = this.fb.group({
      idChambre: [null, Validators.required],
      numeroChambre: [null, Validators.required],
      typeChambre: [null, Validators.required],
      bloc: [null, Validators.required],
      // Add other form controls as needed
    });
  }
  ngOnInit(): void {
    this.getAllUniversite();
   this.getCountChambre();
  
  }
  //pour get liste de foyer
  getAllUniversite(){
    this.serviceChambre.getAllChambres().subscribe((data : Chambre[])=>{
      console.log("all data ",data);
    
      this.chambres = data;
      
      console.log( this.chambres);


    })
  
}
getCountChambre(){
this.serviceChambre.getcountchambre().subscribe((nb:number)=>{
this.nombreChambres= nb;

})
}

deleteChambre(idChambre: number) {Swal.fire({
  title: 'Es-tu sûr?',
  text: 'Vous ne pourrez pas revenir en arrière !',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Oui, supprimez-le !',
  cancelButtonText: 'Annuler' 
}).then((result) => {
  if (result.isConfirmed) {
  this.serviceChambre.deleteChambre(idChambre).subscribe(
    () => {Swal.fire({
      title: 'Supprimé!',
      text: 'Votre fichier a été supprimé.',
      icon: 'success'
    }).then(() => {
      console.log('Chambre deleted successfully.');
      // Optionally, update the local array of chambres to reflect the changes.
      this.chambres = this.chambres.filter(chambre => chambre.idChambre !== idChambre);
      window.location.reload();
    
    });
  });
}
});
}
/*updateChambre(chambre: Chambre): Observable<Chambre> {
  console.log('Updating chambre:', chambre);
  return this._http.put<Chambre>(`${this.apiServer}updateChambre/${chambre.idChambre}`, chambre, this.httpOptions)
    .pipe(
      tap(updatedChambre => console.log('Chambre updated:', updatedChambre)),
      catchError(error => {
        console.error('Error updating chambre:', error);
        throw error;
      })
    );
}*/


/*submitUpdate() {
  console.log('Submitting update...');
  if (this.chambreForm.valid) {
    const updatedChambre: Chambre = this.chambreForm.value;
    console.log('Updated chambre:', updatedChambre);

    this.serviceChambre.updateChambre(updatedChambre).subscribe(
      (updatedChambre) => {
        console.log('Chambre updated successfully:', updatedChambre);
        // Optionally, update the local array of chambres to reflect the changes.
        // You might need to find the index of the updated chambre and replace it.
      },
      (error) => {
        console.error('Error updating chambre:', error);
      }
    );
  }
}*/

SaveStorage(bloc){
  localStorage.setItem('blocs',JSON.stringify(bloc));
}

openBlocShowForm(bloc: Bloc): void {
  const dialogRef = this.dialog.open(ViewChambreComponent, {
    width: '45%',
    height: '40%',
    data : {
      bloc: bloc
    }
  });
  
}



}
