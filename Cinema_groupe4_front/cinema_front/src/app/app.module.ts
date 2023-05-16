import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './contant/header/header.component';
import { FooterComponent } from './contant/footer/footer.component';
import { AfficherUnFilmComponent } from './composant/afficher-un-film/afficher-un-film.component';
import { CarouselComponent } from './composant/carousel/carousel.component';
import { AfficherCinemaComponent } from './composant/afficher-cinema/afficher-cinema.component';
import { FormulaireConnexionComponent } from './composant/formulaire-connexion/formulaire-connexion.component';
import { FormulaireInscriptionComponent } from './composant/formulaire-inscription/formulaire-inscription.component';
import { ListeFilmComponent } from './composant/liste-film/liste-film.component';
import { PlaceComponent } from './composant/place/place.component';
import { ValiderTicketComponent } from './composant/valider-ticket/valider-ticket.component';
import { ListeProgrammationComponent } from './composant/liste-programmation/liste-programmation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentFormComponent } from './composant/payment-form/payment-form.component';
import { AccueilComponent } from './affichage/accueil/accueil.component';
import { ErreurComponent } from './composant/erreur/erreur.component';
import { ReservationComponent } from './affichage/reservation/reservation.component';
import { FilmsComponent } from './affichage/films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AfficherUnFilmComponent,
    CarouselComponent,
    AfficherCinemaComponent,
    FormulaireConnexionComponent,
    FormulaireInscriptionComponent,
    ListeFilmComponent,
    PlaceComponent,
    ValiderTicketComponent,
    ListeProgrammationComponent,
    PaymentFormComponent,
    AccueilComponent,
    ErreurComponent,
    ReservationComponent,
    FilmsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
