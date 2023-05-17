import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-afficher-un-film',
  templateUrl: './afficher-un-film.component.html',
  styleUrls: ['./afficher-un-film.component.css']
})
export class AfficherUnFilmComponent implements OnInit{

  listeFilm : Film[] = [];
  film : Film |any;
  films : Film[] =[];
  dateDuJour: Date = new Date()
  formatOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

  constructor(private filmService : FilmService, private router : Router){}

  ngOnInit() : void {
    this.films = this.filmService.listeFilm;
    this.film = this.getFilmAlAffiche(this.films);
  }

  afficherUnFilm(film : Film){
    this.filmService.film = film;
    this.router.navigateByUrl("/unfilm")
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
  
}
