// chambre.service.ts

import { Injectable } from '@angular/core';
import { Chambre } from '../Model/Chambre';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TwilioService } from './twilio.service';
import { tap } from 'rxjs/operators';
import { Bloc } from '../Model/Bloc';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private apiServer: string = 'http://localhost:8080/TpEtudeDeCas/chambre/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private nombreChambresSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  nombreChambres$: Observable<number> = this.nombreChambresSubject.asObservable();

  constructor(private _http: HttpClient, private twilioService: TwilioService) {
    const storedCount = localStorage.getItem('nombreChambres');
    const initialCount = storedCount ? parseInt(storedCount, 10) : 0;
    this.nombreChambresSubject = new BehaviorSubject<number>(initialCount);
    
  }

  getAllChambres(): Observable<Chambre[]> {
    return this._http.get<Chambre[]>(this.apiServer + 'getAllChambres', this.httpOptions);
  }

  getAllBlocs(): Observable<Bloc[]> {
    return this._http.get<Bloc[]>('http://localhost:8080/TpEtudeDeCas/bloc/getAllBlocs', this.httpOptions);
  }

  deleteChambre(idChambre: number): Observable<any> {
    return this._http.delete(`${this.apiServer}deleteChambre/${idChambre}`, this.httpOptions)
  }

  updateChambre(chambre: Chambre): Observable<Chambre> {
    return this._http.put<Chambre>(`${this.apiServer}updateChambre`, chambre, this.httpOptions);
  }

  createChambre(chambre: Chambre) {
    return this._http.post<Chambre>(this.apiServer + 'addChambre', chambre, this.httpOptions)
  }
  getcountchambre(){
    return this._http.get(this.apiServer + 'getnbChambre', this.httpOptions);

  }

 
}
