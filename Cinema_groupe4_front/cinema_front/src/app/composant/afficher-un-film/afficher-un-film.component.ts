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

  films : Film[] =[];

  filmListe : Film[][] = [];

  tailleSousListe : number = 3;

  constructor(private filmService : FilmService, private router : Router){}

  ngOnInit() : void {
    this.getListeFilm();
    
  }

  cutList(listeFilm : Film[]){
    for (let i = 0; i < listeFilm.length; i += this.tailleSousListe) {
      var sousListe = listeFilm.slice(i, i + this.tailleSousListe);
      this.filmListe.push(sousListe);
    }
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

  image : string = "../assets/images/django.jpg"
  affiche_front : string = "../assets/images/django.jpg"

}
