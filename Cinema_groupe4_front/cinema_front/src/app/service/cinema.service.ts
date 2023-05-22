import { Injectable } from '@angular/core';
import { Cinema } from '../model/cinema';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  cinema : Cinema | any;

  private _url : string = 'http://localhost:9091/cinema_api';

  constructor(private httpClient : HttpClient) { }

  getCinemaById(idCinema : string) : Observable<Cinema[]> {
    return this.httpClient.get<Cinema[]>(this._url + "/getid/" + idCinema);
  }

  getCinemaByName(name : string) : Observable<Cinema> {
    return this.httpClient.get<Cinema>(this._url + "/getnom/" + name);
  }

  getCinemaBycodePostal(codePostal : number) : Observable<Cinema> {
    return this.httpClient.get<Cinema>(this._url + "/getcodePostal/" + codePostal);
  }

  getAllCinema() : Observable<Cinema[]> {
    return this.httpClient.get<Cinema[]>(this._url);
  }
  getAllCinemaByVille(ville : string) : Observable<Cinema[]> {
    return this.httpClient.get<Cinema[]>(this._url + "/getville/" + ville);
  }
}
