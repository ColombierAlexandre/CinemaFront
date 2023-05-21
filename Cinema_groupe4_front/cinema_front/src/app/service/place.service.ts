import { Injectable } from '@angular/core';
import { Place } from '../model/place';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programmation } from '../model/programmation';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  place : Place | any;

  private _url : string = 'http://localhost:9091/place_api';

  constructor(private httpClient : HttpClient, private router : Router) { }

 /* getAllPlaceForASalle(idSalle : number) : Observable<Place[]>{
    return this.httpClient.get<Place[]>(this._url + "/getAll");
  }*/
  updatePlace(place : Place) : Observable<Place>{
    return this.httpClient.put<Place>(this._url,place);
  }
  getPlaceId(id : number) : Observable<Place>{
    return this.httpClient.get<Place>(this._url + "/" + id);
  }

  getAllPlaceForAShow(Prog : Programmation) : Observable<Place[]>{
    return this.httpClient.get<[Place]>(this._url + "/getAllProgForShow/");
  }

}