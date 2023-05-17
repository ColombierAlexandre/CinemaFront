import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/model/cinema';
import { Place } from 'src/app/model/place';
import { CinemaService } from 'src/app/service/cinema.service';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-valider-ticket',
  templateUrl: './valider-ticket.component.html',
  styleUrls: ['./valider-ticket.component.css']
})
export class ValiderTicketComponent {

  constructor(private placeService : PlaceService, private cinemaService : CinemaService, private router : Router){}

  logo : string = "../assets/images/logo.jpg";

  place : Place | any
  cinema : Cinema | undefined

  ngOnInit() : void {
    this.place = this.placeService.place
    this.cinema = this.cinemaService.cinema
  }

  validerTicket(){
    try {
      this.place.isUsed(true)
      console.log(this.place.isUsed())
      this.placeService.updatePlace(this.place)
    } catch (error) {
      
    }
    

    this.cinemaService.cinema = this.cinema
    this.router.navigateByUrl("/payement")
  }


}
