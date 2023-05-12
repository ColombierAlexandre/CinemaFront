import { Injectable } from '@angular/core';
import { Salle } from '../model/salle';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  private _url : string = 'http://localhost:9091/salle_api';

  constructor(private httpClient : HttpClient) { }

  getSalleById(idSalle : number) : Observable<Salle> {
    return this.httpClient.get<Salle>(this._url + "/" + idSalle);
  }
  getAllSalle() : Observable<Salle[]> {
    return this.httpClient.get<Salle[]>(this._url);
  }
  
 

}
