import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.css']
})
export class ListeFilmComponent {

  constructor(private filmService : FilmService, private router : Router){}

  films : Film[] = []
  films_a_l_affiche : Film[] = []
  films_a_voir_prochainement : Film[] = []
  dateDuJour: Date = new Date()
  formatOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };


  ngOnInit() : void {
    this.getListeFilms()
  }

  getListeFilms(){
    this.filmService.getAllFilmBo().subscribe({
      next : (filmsData) => {this.films = filmsData},
      error : (erreur) => {console.log(erreur)},
      complete : () => {

        for (let i = 0; i < this.films.length; i++) {
          if (new Date(this.films[i].dateDeSortie) <= this.dateDuJour){
          this.films_a_l_affiche.push(this.films[i]);
          }else{
            this.films_a_voir_prochainement.push(this.films[i]);
            }
        }
      }
    })
  }

  allerVersProgs(film : Film){
    this.filmService.film = film;
    this.router.navigateByUrl("/prog");
  }

  allerVersUnFilm(film : Film ){
    this.filmService.film = film;
    this.router.navigateByUrl("/unfilm");
  }

}
