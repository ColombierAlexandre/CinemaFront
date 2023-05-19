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

  private _url : string = 'http://localhost:9091/programmation_api';

  constructor(private httpClient : HttpClient, private router : Router) { }

  getAllProg():Observable<Programmation[]>{
    return this.httpClient.get<Programmation[]>(this._url);
  }

  getProgByFilmAndCinema(film : Film, cinema : Cinema) : Observable<Programmation[]>{
    return this.httpClient.get<[Programmation]>(this._url + "/getAllByFilmCine/");
  }

//  afficherDates(dateStr : Date){
  
// var date = new Date(dateStr);

// var day = ("0" + date.getDate()).slice(-2);
// var month = ("0" + (date.getMonth() + 1)).slice(-2);
// var year = date.getFullYear();
// var hours = ("0" + date.getHours()).slice(-2);
// var minutes = ("0" + date.getMinutes()).slice(-2);

// var formattedDate = day + "/" + month + "/" + year + " à " + hours + "h" + minutes + " minutes";

// console.log(formattedDate);
  //}

  

}
