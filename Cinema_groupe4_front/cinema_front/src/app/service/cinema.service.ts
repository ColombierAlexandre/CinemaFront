import { Injectable } from '@angular/core';
import { Cinema } from '../model/cinema';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private _url : string = 'http://localhost:9091/cinema_api';

  constructor(private httpClient : HttpClient) { }

  getCinemaBoById(idCinema : string) : Observable<Cinema[]> {
    return this.httpClient.get<Cinema[]>(this._url + "/" + idCinema);
  }

  getCinemaBoByName(name : string) : Observable<Cinema> {
    return this.httpClient.get<Cinema>(this._url + "/" + name);
  }

  getAllCinema() : Observable<Cinema[]> {
    return this.httpClient.get<Cinema[]>(this._url);
  }
  getAllCinemaBoByVille(ville : string) : Observable<Cinema[]> {
    return this.httpClient.get<Cinema[]>(this._url + "/allCineBoVille/" + ville);
  }
}
