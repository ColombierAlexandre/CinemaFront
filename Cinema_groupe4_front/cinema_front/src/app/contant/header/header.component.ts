import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/model/cinema';
import { Utilisateur } from 'src/app/model/utilisateur';
import { CinemaService } from 'src/app/service/cinema.service';
import { FilmService } from 'src/app/service/film.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit, OnInit{
  
  utilisateur : Utilisateur | any;
  cinema : Cinema | any;

  constructor(private filmService : FilmService, private utilisateurService : UtilisateurService, private cinemaService : CinemaService, private router : Router){}

  ngOnInit(): void {
    this.utilisateur = this.utilisateurService.utilisateur;
    this.cinema = this.cinemaService.cinema;
  }

  ngAfterViewInit(): void {
    console.log("************************",this.myDiv);
    console.log("++++++++++++++++++++++++",this.myDiv.nativeElement.innerHTML)
  }

  AllerVersAccueil(cinema : Cinema, utilisateur : Utilisateur){
    this.utilisateurService.utilisateur = utilisateur;
    this.cinemaService.cinema = cinema;
    this.router.navigateByUrl("/accueil")
  }

  AllerVersListeFilm(cinema : Cinema, utilisateur : Utilisateur){
    this.utilisateurService.utilisateur = utilisateur;
    this.cinemaService.cinema = cinema;
    this.router.navigateByUrl("/listeFilm")
  }

  AllerVersCinemas(cinema : Cinema, utilisateur : Utilisateur){
    this.utilisateurService.utilisateur = utilisateur;
    this.cinemaService.cinema = cinema;
    this.router.navigateByUrl("/cinemas")
  }

  AllerVersUtilisateur(cinema : Cinema, utilisateur : Utilisateur){
    this.utilisateurService.utilisateur = utilisateur;
    this.cinemaService.cinema = cinema;
    this.router.navigateByUrl("/identification")
  }

  @ViewChild('myDiv')
  myDiv!: ElementRef;

  @ViewChild('myI')
  myI!: ElementRef;

  @ViewChild('myDdm')
  myDdm!: ElementRef;

  clickToggleBtn(){
    this.myDdm.nativeElement.classList.toggle('open')
    const isOpen = this.myDdm.nativeElement.classList.contains('open')

    this.myI.nativeElement.classList = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
  }
}
