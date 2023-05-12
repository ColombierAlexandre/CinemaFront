import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/model/cinema';
import { Place } from 'src/app/model/place';
import { Salle } from 'src/app/model/salle';
import { CinemaService } from 'src/app/service/cinema.service';
import { PlaceService } from 'src/app/service/place.service';
import { SalleService } from 'src/app/service/salle.service';

@Component({
  selector: 'app-liste-programmation',
  templateUrl: './liste-programmation.component.html',
  styleUrls: ['./liste-programmation.component.css']
})
export class ListeProgrammationComponent implements OnInit{

  places : Place[] = [];

  salles : Salle[] = [];

  cinemas : Cinema[] = [];

  constructor(private placeService : PlaceService, private salleService : SalleService, private cinemaService : CinemaService){}

  ngOnInit(): void {
    this.getAllPlaces();
    this.getAllSalles();
    this.getAllCinemas();
  }

  getAllPlaces(){
    this.placeService.getAllPlace().subscribe({
      next : (dataPlace)=>{this.places = dataPlace},
      error : (erreur)=>{console.log(erreur)},
      complete : ()=>{}
    })
  }

  getAllSalles(){
    this.salleService.getAllSalle().subscribe({
      next : (dataSalle)=>{this.salles = dataSalle},
      error : (erreur)=>{console.log(erreur)},
      complete : ()=>{}
    })
  }

  getAllCinemas(){
    this.cinemaService.getAllCinema().subscribe({
      next : (dataCinema)=>{this.cinemas = dataCinema},
      error : (erreur)=>{console.log(erreur)},
      complete : ()=>{}
    })
  }


}
