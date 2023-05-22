import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/model/cinema';
import { CinemaService } from 'src/app/service/cinema.service';

@Component({
  selector: 'app-afficher-cinema',
  templateUrl: './afficher-cinema.component.html',
  styleUrls: ['./afficher-cinema.component.css']
})
export class AfficherCinemaComponent implements OnInit{
  cinemas : Cinema[] = [];
  cinemarecherche : Cinema[] = []
  recherche : string | any;
  @ViewChild('myDiv')
  myDiv!: ElementRef; 

  constructor(private cinemaService : CinemaService, private router : Router){}

  ngOnInit(): void {
    this.getAllCinema();
  }
  ngAfterViewInit(): void {

  }


  getAllCinema(){
    this.cinemaService.getAllCinema().subscribe({
      next : (dataCinema)=>{this.cinemas = dataCinema},
      error : (erreur)=>{console.log(erreur)},
      complete : ()=>{
        this.recherchercinemaliste();
        console.log(this.cinemarecherche);
        
      }
    })

  }
  
  recherchercinemaliste(){
    if (this.recherche == "" || this.recherche == undefined){
      this.cinemarecherche = [];
  
    } else {
      this.cinemarecherche = [];
      this.cinemas.forEach((cinema : Cinema)=>{
        if (cinema.ville==this.recherche){
            this.cinemarecherche.push(cinema);  
        }
      });
    
    }
console.log('this.recherche',this.recherche);
    console.log('this.cinemase',this.cinemas);
    console.log('this.cinemarecherche',this.cinemarecherche);

  }

 selectionnerCinema(cinema : Cinema){
    this.cinemaService.cinema = cinema;
    this.router.navigateByUrl("/listeFilms");
 }
}
