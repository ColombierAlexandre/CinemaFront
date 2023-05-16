import { Component } from '@angular/core';
import { PlaceService } from 'src/app/service/place.service';
import { Place } from 'src/app/model/place';
import { Router } from '@angular/router';
import { Programmation } from 'src/app/model/programmation';
import { ActivatedRoute } from '@angular/router';
import { ProgrammationService } from 'src/app/service/programmation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent {
  places : Place[] = [];
  place : Place | any;
  programmation : Programmation | any;

  constructor(private progServ : ProgrammationService, private placeService : PlaceService, private router : ActivatedRoute, private newroute : Router){};

  ngOnInit():void{
    this.programmation = this.progServ.progra;
   this.AllPlacesForShow(this.programmation.id);
  }

  AllPlacesForShow (programmationId : number){
    this.placeService.getAllPlaceForAShow(programmationId).subscribe({
      next : (donneesPlace)=>{ this.places= donneesPlace},
          error : (erreur)=>{ console.log(erreur)},
          complete : ()=>{}
    })
  }

  AllerVersTicket(place : Place ){
    this.newroute.navigate(['/ticket', place]);
  }

  UpdatePlace(place : Place){
    this.placeService.updatePlace(this.place).subscribe({
      next : (placeupdate)=>{ this.place= placeupdate},
          error : (erreur)=>{ console.log(erreur)},
          complete : ()=>{}
    })
  }



}
