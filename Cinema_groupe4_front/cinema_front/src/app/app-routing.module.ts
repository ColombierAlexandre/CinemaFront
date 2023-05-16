import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValiderTicketComponent } from './composant/valider-ticket/valider-ticket.component';
import { AccueilComponent } from './affichage/accueil/accueil.component';
import { ErreurComponent } from './composant/erreur/erreur.component';
import { AfficherCinemaComponent } from './composant/afficher-cinema/afficher-cinema.component';
import { FormulaireConnexionComponent } from './composant/formulaire-connexion/formulaire-connexion.component';
import { ReservationComponent } from './affichage/reservation/reservation.component';
import { FilmsComponent } from './affichage/films/films.component';
import { PaymentFormComponent } from './composant/payment-form/payment-form.component';
import { ListeProgrammationComponent } from './composant/liste-programmation/liste-programmation.component';
import { AfficherUnFilmComponent } from './composant/afficher-un-film/afficher-un-film.component';

const routes: Routes = [

  {path:"accueil", component : AccueilComponent},
  {path:"404", component : ErreurComponent},
  {path:"cinemas",component:AfficherCinemaComponent},
  {path:"listeFilm",component:FilmsComponent},
  {path:"identification",component:FormulaireConnexionComponent},
  {path:"reservation",component:ReservationComponent},
  {path:"validerTicket",component:ValiderTicketComponent},
  {path:"payement", component : PaymentFormComponent},
  {path:"prog", component : ListeProgrammationComponent},
  {path:"unfilm", component : AfficherUnFilmComponent},

  {path:"",redirectTo: '/accueil',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
