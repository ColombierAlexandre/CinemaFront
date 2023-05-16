import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.css']
})
export class ListeFilmComponent {

  constructor(private filmService : FilmService, private router : Router){}

  films : Film[] = []
  films_a_l_affiche : Film[] = []
  films_a_voir_prochainement : Film[] = []

  // ngOnInit() : void {
  //   this.get_liste_films_a_l_affiche()
  //   this.get_liste_films_a_voir_prochainement()
  // }

  // getListeFilms(){
  //   this.filmService.getAllFilm().subscribe({
  //     next : (filmsData) => {this.films = filmsData},
  //     error : (erreur) => {console.log(erreur)},
  //     complete : () => {}
  //   })
  // }

  // get_liste_films_a_l_affiche(){
  //   this.getListeFilms()
  //   this.films.forEach(film => {
  //     if (film.programmations.length > 0){
  //       this.films_a_l_affiche.push(film)
  //     }
  //   });
  // }

  // get_liste_films_a_voir_prochainement(){
  //   this.getListeFilms()
  //   this.films.forEach(film => {
  //     if (film.programmations.length == 0){
  //       this.films_a_l_affiche.push(film)
  //     }
  //   });
  // }

  allerVersUnFilm(film : Film ){
    this.router.navigate(['/acceuil',film]);
  }

}
