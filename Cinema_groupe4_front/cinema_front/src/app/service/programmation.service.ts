import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programmation } from '../model/programmation';
import { Film} from '../model/film';
import { Router } from '@angular/router';
import { Cinema } from '../model/cinema';

@Injectable({
  providedIn: 'root'
})
export class ProgrammationService {

  progra : Programmation | any;

  private _url : string = 'http://localhost:9091/programmationBo_api';

  constructor(private httpClient : HttpClient, private router : Router, private prog : ProgrammationService) { }

  getAllProg():Observable<Programmation[]>{
    return this.httpClient.get<[Programmation]>(this._url);
  }

  getProgByFilmAndCinema(film : Film, cinema : Cinema) : Observable<Programmation[]>{
    return this.httpClient.get<[Programmation]>(this._url + "/getAllByFilmCine/",);
  }

}
