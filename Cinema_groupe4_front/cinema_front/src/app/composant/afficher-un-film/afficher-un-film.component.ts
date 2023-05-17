import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class AfficherUnFilmComponent implements OnInit,OnChanges{

  utilisateur : Utilisateur | any;
  cinema : Cinema | any;
  @Input() listeFilm : any;
  film : Film | any;
  listeFilm1 : Film[] = [];
  filmAffiche : Film = new Film();
  dateDuJour: Date = new Date();

  constructor(private filmService : FilmService, private utilisateurService : UtilisateurService, private cinemaService : CinemaService, private router : Router){}
  ngOnChanges(changes: SimpleChanges): void {
        


    this.filmAffiche = this.listeFilm[0];
    console.log("******film1***********",this.listeFilm1);
    console.log("******film[0]*******",this.listeFilm1[0]);
    console.log("****filmAffiche*******",this.filmAffiche);
    console.log("------listeFilmrecu-------",this.listeFilm);
    console.log("------listeFilmrecu-------",this.listeFilm[0]);
  }

  ngOnInit() : void {
    this.utilisateur = this.utilisateurService.utilisateur;
    this.cinema = this.cinemaService.cinema;
    this.film = this.listeFilm[0];
  }


  

  afficherUnFilm(film : Film, cinema : Cinema, utilisateur : Utilisateur){
    this.utilisateurService.utilisateur = utilisateur;
    this.filmService.film = film;
    this.cinemaService.cinema = cinema;
    this.router.navigateByUrl("/unfilm")
  }

}
