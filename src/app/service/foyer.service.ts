import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foyer } from '../Model/Foyer';
import { Universite } from '../Model/Universite';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiServer:String='http://localhost:8080/TpEtudeDeCas/foyer/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http:HttpClient) { }
  
  getAllFoyers():Observable<Foyer[]>{    
    return this._http.get<Foyer[]>(this.apiServer +'getAllFoyers', this.httpOptions);
  }
  deleteFoyer(id:number){
    return this._http.delete<Foyer[]>(this.apiServer +'deleteFoyer/'+id, this.httpOptions);
    }
  getAllUniversite():Observable<Universite[]>{
      return this._http.get<Universite[]>(this.apiServer +'getAllUniversite', this.httpOptions);
    }
  
}
