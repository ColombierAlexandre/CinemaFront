import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  utilisateur : Utilisateur | any;

  private _url : string = 'http://localhost:9091/utilisateur_api';
  
  constructor(private httpClient : HttpClient) { }

  addUtilisateurBo(utilisateur : Utilisateur) : Observable<Utilisateur>{
    return this.httpClient.post<Utilisateur>(this._url,utilisateur);
  }

  updateUtilisateurBo(utilisateur : Utilisateur) : Observable<Utilisateur>{
    return this.httpClient.put<Utilisateur>(this._url,utilisateur);
  }

  deleteUtilisateurBo(utilisateur : Utilisateur) : Observable<Utilisateur>{
    //return this.httpClient.delete<PokemonInterface>(this._url + "/" + pokemon.id);
    console.log(utilisateur);
    return this.httpClient.delete<Utilisateur>(`${this._url}/${utilisateur.id}`);
  }

  getUtilisateurBoById(id : number) : Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>(this._url + "/" + id);
  }

  getUtilisateurBoByMail(mail : string) : Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>(this._url + "/mail/" + mail);
  }

  getAllUtilisateursBo() : Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(this._url);
  }
}
