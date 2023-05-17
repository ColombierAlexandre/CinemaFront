import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/model/cinema';
import { Place } from 'src/app/model/place';
import { Programmation } from 'src/app/model/programmation';
import { Utilisateur } from 'src/app/model/utilisateur';
import { CinemaService } from 'src/app/service/cinema.service';
import { PlaceService } from 'src/app/service/place.service';
import { ProgrammationService } from 'src/app/service/programmation.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-valider-ticket',
  templateUrl: './valider-ticket.component.html',
  styleUrls: ['./valider-ticket.component.css']
})
export class ValiderTicketComponent {

  constructor(private placeService : PlaceService, private progService : ProgrammationService, private cinemaService : CinemaService, 
    private utilisateurService : UtilisateurService, private router : Router){}

  logo : string = "../assets/images/logo.jpg";

  place : Place | any
  prog : Programmation | any
  cinema : Cinema | any
  utilisateur : Utilisateur | any

  ngOnInit() : void {
    this.place = this.placeService.place
    this.cinema = this.cinemaService.cinema
    this.utilisateur = this.utilisateurService.utilisateur
    this.prog = this.progService.getProgById(this.place.programmationId())
  }

  validerTicket(){
    try {
      this.place.isUsed(true)
      console.log(this.place.isUsed())
      this.placeService.updatePlace(this.place)
    } catch (error) {
      
    }
    
    this.utilisateurService.utilisateur = this.utilisateur
    this.cinemaService.cinema = this.cinema
    this.router.navigateByUrl("/payement")
  }


}
