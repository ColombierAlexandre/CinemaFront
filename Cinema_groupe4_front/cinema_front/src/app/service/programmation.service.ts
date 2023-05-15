import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programmation } from '../model/programmation';
import { Film} from '../model/film';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProgrammationService {

  private prog : ProgrammationService | undefined;

  private _url : string = 'http://localhost:9091/programmation';

  constructor(private httpClient : HttpClient, private router : Router) { }

  getAllProg():Observable<Programmation[]>{
    return this.httpClient.get<[Programmation]>(this._url);
  }

  getProgByFilm(filmId : number) : Observable<Programmation[]>{
    return this.httpClient.get<[Programmation]>(this._url + "/ByFilm/" + filmId);
  }

}
