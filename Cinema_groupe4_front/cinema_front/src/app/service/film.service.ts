import { Injectable } from '@angular/core';
import { Film } from '../model/film';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  film : Film | any;

  listeFilm : Film[] = [];

  private _url : string = 'http://localhost:9091/filmBo_api';

  constructor(private httpClient : HttpClient) { }

  getFilmBoById(visa : number) : Observable<Film> {
    return this.httpClient.get<Film>(this._url + "/" + visa);
  }

  getFilmBoByName(name : string) : Observable<Film> {
    return this.httpClient.get<Film>(this._url + "/titre/" + name);
  }

  getAllFilmBo() : Observable<Film[]> {
    return this.httpClient.get<Film[]>(this._url);
  }
  

}
