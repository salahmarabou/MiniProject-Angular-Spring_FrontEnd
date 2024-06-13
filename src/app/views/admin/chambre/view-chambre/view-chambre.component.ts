import { Component ,Inject, Input, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Bloc } from 'src/app/Model/Bloc';

@Component({
  selector: 'app-view-chambre',
  templateUrl: './view-chambre.component.html',
  styleUrls: ['./view-chambre.component.css']
})
export class ViewChambreComponent implements OnInit{
  @Input() bloc?:Bloc;

  constructor(private dialogRef: MatDialogRef<ViewChambreComponent>, @Inject(MAT_DIALOG_DATA) public data: { bloc: Bloc }){
    this.bloc = this.data.bloc;
  }

  ngOnInit(): void {
    console.log("Bloc ::: ",this.bloc);
  }

}
