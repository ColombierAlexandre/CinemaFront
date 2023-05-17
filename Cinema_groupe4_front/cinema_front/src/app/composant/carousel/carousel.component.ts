import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/model/cinema';
import { Film } from 'src/app/model/film';
import { Utilisateur } from 'src/app/model/utilisateur';
import { CinemaService } from 'src/app/service/cinema.service';
import { FilmService } from 'src/app/service/film.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  utilisateur : Utilisateur | any;
  cinema : Cinema | any;
  @Input() films : Film[] = [];
  filmListe : Film[][] = [];
  tailleSousListe : number = 3;

  constructor(private filmService : FilmService, private utilisateurService : UtilisateurService, private cinemaService : CinemaService, private router : Router){}

  ngOnInit(){
    this.getListeFilm();
  }

  getListeFilm(){
    this.filmService.getAllFilmBo().subscribe({
      next : (dataFilm)=>{this.films = dataFilm},
      error : (erreur)=>{console.log(erreur)},
      complete : ()=>{
        for (let i = 0; i < this.films.length; i += this.tailleSousListe) {
          var sousListe = this.films.slice(i, i + this.tailleSousListe);
          this.filmListe.push(sousListe);
        }
      }
    })
  }

  afficherUnFilm(film : Film, cinema : Cinema, utilisateur : Utilisateur){
    this.utilisateurService.utilisateur = utilisateur;
    this.filmService.film = film;
    this.cinemaService.cinema = cinema;
    this.router.navigateByUrl("/afficherUnFilm")
  }

}


