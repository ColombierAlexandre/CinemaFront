import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherUnFilmComponent } from './composant/afficher-un-film/afficher-un-film.component';
import { AfficherCinemaComponent } from './composant/afficher-cinema/afficher-cinema.component';
import { ListeFilmComponent } from './composant/liste-film/liste-film.component';
import { PlaceComponent } from './composant/place/place.component';
import { ValiderTicketComponent } from './composant/valider-ticket/valider-ticket.component';
import { ListeProgrammationComponent } from './composant/liste-programmation/liste-programmation.component';
import { FormulaireConnexionComponent } from './composant/formulaire-connexion/formulaire-connexion.component';
import { PayementFormComponent } from './composant/payement-form/payement-form.component';


const routes: Routes = [
  {path : "accueil", component : PlaceComponent},
  {path : "cinemas", component : AfficherCinemaComponent},
  {path : "listeFilms", component : ListeFilmComponent},
  {path : "places",component:PlaceComponent},
  {path : "ticket",component:ValiderTicketComponent},
  {path : "validerTicket",component:ValiderTicketComponent},
  {path : "identification",component:FormulaireConnexionComponent},
  {path : "payement", component : PayementFormComponent},
  {path : "prog", component : ListeProgrammationComponent},
  {path : "unfilm", component : AfficherUnFilmComponent},

  {path : "",redirectTo: '/accueil',pathMatch:'full'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
