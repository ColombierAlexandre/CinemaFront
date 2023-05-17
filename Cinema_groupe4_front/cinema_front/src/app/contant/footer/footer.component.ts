import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/model/cinema';
import { Utilisateur } from 'src/app/model/utilisateur';
import { CinemaService } from 'src/app/service/cinema.service';
import { FilmService } from 'src/app/service/film.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  utilisateur : Utilisateur | any;
  cinema : Cinema | any;

  constructor(private filmService : FilmService, private utilisateurService : UtilisateurService, private cinemaService : CinemaService, private router : Router){}
  
  ngOnInit(): void {
    this.utilisateur = this.utilisateurService.utilisateur;
    this.cinema = this.cinemaService.cinema;
  }

  AllerVersAccueil(){
    this.utilisateurService.utilisateur = this.utilisateur;
    this.cinemaService.cinema = this.cinema;
    this.router.navigateByUrl("/accueil")
  }

  AllerVersListeFilm(){
    this.utilisateurService.utilisateur = this.utilisateur;
    this.cinemaService.cinema = this.cinema;
    this.router.navigateByUrl("/listeFilm")
  }

  AllerVersCinemas(){
    this.utilisateurService.utilisateur = this.utilisateur;
    this.cinemaService.cinema = this.cinema;
    this.router.navigateByUrl("/cinemas")
  }

  AllerVersUtilisateur(){
    this.utilisateurService.utilisateur = this.utilisateur;
    this.cinemaService.cinema = this.cinema;
    this.router.navigateByUrl("/identification")
  }
}
