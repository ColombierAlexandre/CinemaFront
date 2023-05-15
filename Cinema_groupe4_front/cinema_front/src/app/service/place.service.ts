import { Injectable } from '@angular/core';
import { Place } from '../model/place';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private place : Place | undefined;

  private _url : string = 'http://localhost:9091/place_api';

  constructor(private httpClient : HttpClient) { }

 /* getAllPlaceForASalle(idSalle : number) : Observable<Place[]>{
    return this.httpClient.get<Place[]>(this._url + "/getAll");
  }*/
  updatePlace(palce : Place) : Observable<Place>{
    return this.httpClient.put<Place>(this._url,palce);
  }
  getPlaceId(id : number) : Observable<Place>{
    return this.httpClient.get<Place>(this._url + "/" + id);
  }

  getAllPlaceForAShow(idProg : number) : Observable<Place[]>{
    return this.httpClient.get<Place[]>(this._url + "/getAll");
  }

}