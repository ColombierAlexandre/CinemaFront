import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherUnFilmComponent } from './composant/afficher-un-film/afficher-un-film.component';
import { CarouselComponent } from './composant/carousel/carousel.component';
import { AfficherCinemaComponent } from './composant/afficher-cinema/afficher-cinema.component';
import { ListeFilmComponent } from './composant/liste-film/liste-film.component';

const routes: Routes = [
  {path : "acceul", component : AfficherUnFilmComponent},
  {path : "cinemas", component : AfficherCinemaComponent},
  {path : "films", component : ListeFilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
