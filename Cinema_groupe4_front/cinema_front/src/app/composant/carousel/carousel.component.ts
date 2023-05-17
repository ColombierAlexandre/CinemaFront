import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  films : Film[] = [];

  filmListe : Film[][] = [];

  tailleSousListe : number = 3;

  constructor(private filmService : FilmService, private router : Router){}

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

  afficherUnFilm(film : Film){
    this.filmService.film = film;
    this.router.navigateByUrl("/afficherUnFilm")
  }

  affiche_front : string = "../assets/images/django.jpg"

}


