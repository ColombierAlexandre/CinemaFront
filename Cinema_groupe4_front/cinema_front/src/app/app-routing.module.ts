import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherUnFilmComponent } from './composant/afficher-un-film/afficher-un-film.component';
import { CarouselComponent } from './composant/carousel/carousel.component';
import { AfficherCinemaComponent } from './composant/afficher-cinema/afficher-cinema.component';
import { ListeFilmComponent } from './composant/liste-film/liste-film.component';
import { ValiderTicketComponent } from './composant/valider-ticket/valider-ticket.component';

const routes: Routes = [
  {path : "acceul", component : AfficherUnFilmComponent},
  {path : "cinemas", component : AfficherCinemaComponent},
  {path:"listeFilms",component:ListeFilmComponent},
  {path:"validerTicket",component:ValiderTicketComponent},
  
  {path : "films", redirectTo: '/listeFilms'},
  {path:"",redirectTo: '/listeFilms',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
