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


  constructor(private filmService : FilmService, private router : Router){}

  ngOnInit() : void {
    this.getListeFilm();
  }

  getListeFilm(){
    this.filmService.getAllFilmBo().subscribe({
      next : (dataFilm)=>{this.films = dataFilm},
      error : (erreur)=>{console.log(erreur)},
      complete : ()=>{}
    })

    // division euclidienne :
    const filmsLenfth : number = Math.floor(this.films.length/3);
    const resteFilms : number = this.films.length%3;

    // for(let i= 0; i < filmsLenfth; i++){
    //   filmListe : Film[] = [];
      
    // }((film : Film) => {
        
    // });
  }

  

  afficherUnFilm(film : Film){
    this.filmService.film = film;
    this.router.navigateByUrl("/afficherUnFilm")
  }

  image : string = "../assets/images/django.jpg"
  affiche_front : string = "../assets/images/django.jpg"

}
