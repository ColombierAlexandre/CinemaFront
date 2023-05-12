import { Injectable } from '@angular/core';
import { Place } from '../model/place';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private _url : string = 'http://localhost:9091/place_api';

  constructor(private httpClient : HttpClient) { }
  
  getPlaceById(id : number) : Observable<Place>{
    return this.httpClient.get<Place>(this._url + "/" + id);
  }

  getAllPlace() : Observable<Place[]>{
    return this.httpClient.get<Place[]>(this._url);
  }

  getAllPlaceByProgrammation(idProg : number) : Observable<Place[]>{
    return this.httpClient.get<Place[]>(this._url + "/allProg/" + idProg);
  }
  

}
