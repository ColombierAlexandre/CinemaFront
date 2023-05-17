import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{

  films : Film[] = [];
  films_a_l_affiche : Film[] = [];
  films_a_voir_prochainement : Film[] = [];
  dateDuJour: Date = new Date()
  formatOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };


  constructor(private filmService : FilmService, private router : Router){}

  ngOnInit(): void {
    this.getAllFilm();
  }

  getAllFilm(){
    this.filmService.getAllFilmBo().subscribe({
      next : (dataFilm)=>{this.films = dataFilm},
      error : (erreur)=>{console.log(erreur)},
      complete : ()=>{
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



}
