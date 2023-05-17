import { Component } from '@angular/core';
import { Programmation } from 'src/app/model/programmation';
import { ProgrammationService } from 'src/app/service/programmation.service';
import { Film } from 'src/app/model/film';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/service/film.service';
import { Cinema } from 'src/app/model/cinema';
import { CinemaService } from 'src/app/service/cinema.service';
import { Place } from 'src/app/model/place';
import { PlaceService } from 'src/app/service/place.service';


@Component({
  selector: 'app-liste-programmation',
  templateUrl: './liste-programmation.component.html',
  styleUrls: ['./liste-programmation.component.css']
})
export class ListeProgrammationComponent {
    prog : Programmation[] = [];
    film : Film | any;
    cinema : Cinema | any;

    place : Place[] = [];
    


    constructor(private cinemaService : CinemaService, private filmService : FilmService, private progService : ProgrammationService, private newroute : Router,private placeService : PlaceService){}

    ngOnInit():void{

     // this.film = this.filmService.film;
     // this.cinema = this.cinemaService.cinema;
    //  this.filmService.getFilmBoById(this.film.filmId);
      this.getListeProgrammations();
      // this.getListeProgrammationsByFilmAndCinema(this.film,this.cinema);

    }

    ngAfterViewInit(): void {
      console.log("************************",this.prog);
    //  console.log("------------------------",this.listeFilm);
    }

    getListeForProg(id : number){
      
      this.placeService.getAllPlaceForAShow(id).subscribe({
        next : (dataplaces)=>{ this.place = dataplaces},
        error : (erreur)=>{ console.log(erreur)},
        complete : ()=>{}
      })
    }

    getListeProgrammationsByFilmAndCinema(film : Film, cinema : Cinema){
        this.progService.getProgByFilmAndCinema(film, cinema).subscribe({
          next : (donneesProg)=>{ this.prog = donneesProg},
          error : (erreur)=>{ console.log(erreur)},
          complete : ()=>{
            this.prog.forEach((progra : Programmation) => {
              this.placeService.getAllPlaceForAShow(progra.idProg).subscribe({
                next : (dataplaces)=>{ this.place = dataplaces},
                error : (erreur)=>{ console.log(erreur)},
                complete : ()=>{
                  progra.places = this.place;
                }
              }); 
            });
          }
        });
    }
    getListeProgrammations(){
      this.progService.getAllProg().subscribe({
        next : (donneesProg)=>{ this.prog = donneesProg},
        error : (erreur)=>{ console.log(erreur)},
        complete : ()=>{
          this.prog.forEach((progra : Programmation) => {
            this.placeService.getAllPlaceForAShow(progra.idProg).subscribe({
              next : (dataplaces)=>{ this.place = dataplaces},
              error : (erreur)=>{ console.log(erreur)},
              complete : ()=>{
                progra.places = this.place;
              }
            }); 
          });
        }
          })
    }

    AllerVersReservation(programmation : Programmation){
      this.progService.progra = programmation;
      this.newroute.navigateByUrl("/places");
    }

}
