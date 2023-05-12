import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/model/film';
import { Place } from 'src/app/model/place';
import { Programmation } from 'src/app/model/programmation';
import { Salle } from 'src/app/model/salle';
import { FilmService } from 'src/app/service/film.service';
import { PlaceService } from 'src/app/service/place.service';
import { ProgrammationService } from 'src/app/service/programmation.service';
import { SalleService } from 'src/app/service/salle.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit{

  programmations : Programmation[]= [];

  constructor(private placeService : PlaceService, private programmationService : ProgrammationService, private salleService : SalleService, private filmService : FilmService, private router : Router){}
  
  ngOnInit(): void {
    this.getAllProg
  }
  
  getAllProg(){
    this.programmationService.getAllProg().subscribe({
      next : (dataProgrammation)=>{this.programmations = dataProgrammation},
      error : (erreur)=>{console.log(erreur)},
      complete : ()=>{}
  })
  }

}
