import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private _url : string = 'http://localhost:9091/utilisateur_api';
  
  constructor(private httpClient : HttpClient) { }

  addUtilisateur(utilisateur : Utilisateur) : Observable<Utilisateur>{
    return this.httpClient.post<Utilisateur>(this._url,utilisateur);
  }

  updateUtilisateur(utilisateur : Utilisateur) : Observable<Utilisateur>{
    return this.httpClient.put<Utilisateur>(this._url,utilisateur);
  }

  deleteUtilisateur(utilisateur : Utilisateur) : Observable<Utilisateur>{
    //return this.httpClient.delete<PokemonInterface>(this._url + "/" + pokemon.id);
    console.log(utilisateur);
    return this.httpClient.delete<Utilisateur>(`${this._url}/${utilisateur.id}`);
  }

  getUtilisateurById(id : number) : Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>(this._url + "/" + id);
  }

  getUtilisateurByMail(mail : string) : Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>(this._url + "/mail/" + mail);
  }

  getAllUtilisateurs() : Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(this._url);
  }
}
