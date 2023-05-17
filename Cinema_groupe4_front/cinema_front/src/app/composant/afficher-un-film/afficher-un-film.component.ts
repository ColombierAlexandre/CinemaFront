import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/model/cinema';
import { Film } from 'src/app/model/film';
import { Utilisateur } from 'src/app/model/utilisateur';
import { CinemaService } from 'src/app/service/cinema.service';
import { FilmService } from 'src/app/service/film.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-afficher-un-film',
  templateUrl: './afficher-un-film.component.html',
  styleUrls: ['./afficher-un-film.component.css']
})
export class AfficherUnFilmComponent implements OnInit{

  utilisateur : Utilisateur | any;
  cinema : Cinema | any;
  listeFilm : Film[] = [];
  film : Film | any;
  films : Film[] = [];
  dateDuJour: Date = new Date()
  formatOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

  constructor(private filmService : FilmService, private utilisateurService : UtilisateurService, private cinemaService : CinemaService, private router : Router){}

  ngOnInit() : void {
    this.films = this.filmService.listeFilm;
    this.film = this.getFilmAlAffiche(this.films);
  }

  getFilmAlAffiche(films : Film[]) : Film{
    for (let i = 0; i < films.length; i++) {
      if (new Date(films[i].dateDeSortie) <= this.dateDuJour){
        this.listeFilm.push(films[i]);
      }
    }
     this.film = this.listeFilm[1];
    return this.film;
  }

  afficherUnFilm(film : Film, cinema : Cinema, utilisateur : Utilisateur){
    this.utilisateurService.utilisateur = utilisateur;
    this.filmService.film = film;
    this.cinemaService.cinema = cinema;
    this.router.navigateByUrl("/unfilm")
  }

}
