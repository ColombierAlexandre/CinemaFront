import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/model/cinema';
import { CinemaService } from 'src/app/service/cinema.service';

@Component({
  selector: 'app-afficher-cinema',
  templateUrl: './afficher-cinema.component.html',
  styleUrls: ['./afficher-cinema.component.css']
})
export class AfficherCinemaComponent implements OnInit{

  cinemas : Cinema[] = [];
  
  constructor(private cinemaService : CinemaService, private router : Router){}

  ngOnInit(): void {
    this.getAllCinema();
  }

  getAllCinema(){
    this.cinemaService.getAllCinema().subscribe({
      next : (dataCinema)=>{this.cinemas = dataCinema},
      error : (erreur)=>{console.log(erreur)},
      complete : ()=>{}
    })
  }




}
