import { Injectable } from '@angular/core';
import { Programmation } from '../model/programmation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../model/film';


@Injectable({
  providedIn: 'root'
})
export class ProgrammationService {

  private _url : string = 'http://localhost:9091/programmationBo_api';

  constructor(private httpClient : HttpClient) { }

  getProgrammationBoById(idProg : number) : Observable<Programmation> {
    return this.httpClient.get<Programmation>(this._url + "/" + idProg);
  }

  getAllProgrammationByFilm(film : Film) : Observable<Programmation[]> {
    return this.httpClient.get<Programmation[]>(this._url + "/" + film);
  }

}
