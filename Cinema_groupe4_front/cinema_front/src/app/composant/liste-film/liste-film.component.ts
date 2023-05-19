import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { Cinema } from 'src/app/model/cinema';
import { Film } from 'src/app/model/film';
import { Utilisateur } from 'src/app/model/utilisateur';
import { CinemaService } from 'src/app/service/cinema.service';
import { FilmService } from 'src/app/service/film.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.css']
})
export class ListeFilmComponent {

  constructor(private filmService : FilmService, private cinemaService : CinemaService, 
    private utilisateurService : UtilisateurService, private router : Router){}

  films : Film[] = []

  films_a_l_affiche : Film[] = []
  films_a_voir_prochainement : Film[] = []

  tableau_films_a_l_affiche : Film[][] = [];
  tableau_films_a_voir_prochainement : Film[][] = [];

  dateDuJour: Date = new Date()
  formatOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' }

  tailleSousListe = 4
   
  cinema : Cinema | any
  utilisateur : Utilisateur | any


  ngOnInit() : void {
    this.getListeFilms()
    this.cinema = this.cinemaService.cinema
    this.utilisateur = this.utilisateurService.utilisateur
  }

  getListeFilms(){
    this.filmService.getAllFilmBo().subscribe({
      next : (filmsData) => {this.films = filmsData},
      error : (erreur) => {console.log(erreur)},
      complete : () => {

        for (let i = 0; i < this.films.length; i++) {
          if (new Date(this.films[i].dateDeSortie) <= this.dateDuJour){
          this.films_a_l_affiche.push(this.films[i])
          }else{
            this.films_a_voir_prochainement.push(this.films[i])
          }
          
          for (let i = 0; i < this.films_a_l_affiche.length; i += this.tailleSousListe) {
            var sousListe = this.films_a_l_affiche.slice(i, i + this.tailleSousListe);
            this.tableau_films_a_l_affiche.push(sousListe);
          }
          for (let i = 0; i < this.films_a_voir_prochainement.length; i += this.tailleSousListe) {
            var sousListe = this.films_a_voir_prochainement.slice(i, i + this.tailleSousListe);
            this.tableau_films_a_voir_prochainement.push(sousListe);
            console.log(sousListe);
            
          }
          console.log(this.tableau_films_a_voir_prochainement);
          
          
        }
      }
    })
  }

  allerVersProgs(film : Film){
    this.filmService.film = film
    this.cinemaService.cinema = this.cinema
    this.utilisateurService.utilisateur = this.utilisateur
    this.router.navigateByUrl("/prog")
  }

  allerVersUnFilm(film : Film ){
    this.filmService.film = film
    this.cinemaService.cinema = this.cinema
    this.utilisateurService.utilisateur = this.utilisateur
    this.router.navigateByUrl("/unfilm")
  }


  

}