import { Component } from '@angular/core';
import { PlaceService } from 'src/app/service/place.service';
import { Place } from 'src/app/model/place';
import { Router } from '@angular/router';
import { Programmation } from 'src/app/model/programmation';
import { ActivatedRoute } from '@angular/router';
import { ProgrammationService } from 'src/app/service/programmation.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent {
  places : Place[] = [];
  constructor(private progServ : ProgrammationService, private placeService : PlaceService, private router : ActivatedRoute, private newroute : Router){};

  ngOnInit():void{
    
    this.router.params.subscribe(params => {
     const idPrg = +params['id'];
     this.AllPlacesForShow(idPrg);
    });
    
    
    
  
  }

  AllPlacesForShow (programmationId : number){
    this.placeService.getAllPlaceForAShow(programmationId).subscribe({
      next : (donneesPlace)=>{ this.places= donneesPlace},
          error : (erreur)=>{ console.log(erreur)},
          complete : ()=>{}
    })
  }

  AllerVersTicket(place : Place ){
    this.newroute.navigate(['/ticket',place]);
  }

}
