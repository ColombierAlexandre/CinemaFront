import { Component } from '@angular/core';
import { Programmation } from 'src/app/model/programmation';
import { ProgrammationService } from 'src/app/service/programmation.service';
import { Film } from 'src/app/model/film';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/service/film.service';
import { Cinema } from 'src/app/model/cinema';
import { CinemaService } from 'src/app/service/cinema.service';


@Component({
  selector: 'app-liste-programmation',
  templateUrl: './liste-programmation.component.html',
  styleUrls: ['./liste-programmation.component.css']
})
export class ListeProgrammationComponent {
    prog : Programmation[] = [];
    film : Film | any;
    cinema : Cinema | any;
    constructor(private cinemaService : CinemaService, private filmService : FilmService, private progService : ProgrammationService, private newroute : Router){}

    ngOnInit():void{
      this.film = this.filmService.film;
      this.cinema = this.cinemaService.cinema;
      this.filmService.getFilmBoById(this.film.filmId);
      this.getListeProgrammationsByFilmAndCinema(this.film,this.cinema);
    }

    getListeProgrammationsByFilmAndCinema(film : Film, cinema : Cinema){
        this.progService.getProgByFilmAndCinema(film, cinema).subscribe({
          next : (donneesProg)=>{ this.prog = donneesProg},
          error : (erreur)=>{ console.log(erreur)},
          complete : ()=>{}
        })
    }
    
    getListeProgrammations(){
      this.progService.getAllProg().subscribe({
        next : (donneesProg)=>{ this.prog = donneesProg},
        error : (erreur)=>{ console.log(erreur)},
        complete : ()=>{}
          })
    }

    AllerVersReservation(programmation : Programmation){
      this.progService.progra = programmation;
      this.newroute.navigateByUrl("/places");
    }

}
