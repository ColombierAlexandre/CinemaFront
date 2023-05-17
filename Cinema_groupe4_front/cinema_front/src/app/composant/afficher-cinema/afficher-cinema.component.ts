import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/model/cinema';
import { Utilisateur } from 'src/app/model/utilisateur';
import { CinemaService } from 'src/app/service/cinema.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-afficher-cinema',
  templateUrl: './afficher-cinema.component.html',
  styleUrls: ['./afficher-cinema.component.css']
})
export class AfficherCinemaComponent implements OnInit{

  utilisateur : Utilisateur | any;
  cinemas : Cinema[] = [];
  
  constructor(private cinemaService : CinemaService, private utilisateurService : UtilisateurService, private router : Router){}

  ngOnInit(): void {
    this.getAllCinema();
  }

  getAllCinema(){
    this.cinemaService.getAllCinemaBo().subscribe({
      next : (dataCinema)=>{this.cinemas = dataCinema},
      error : (erreur)=>{console.log(erreur)},
      complete : ()=>{}
    })
  }




}
