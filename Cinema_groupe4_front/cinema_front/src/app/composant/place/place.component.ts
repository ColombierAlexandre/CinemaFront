import { AfterViewInit, Component } from '@angular/core';
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
export class PlaceComponent implements AfterViewInit {
  places : Place[] = [];
  place : Place | any;
  programmation : Programmation | any;

  constructor(private progService : ProgrammationService, private placeService : PlaceService, private router : ActivatedRoute, private newroute : Router){}
  
  
  
  
  
  ngAfterViewInit(): void {
    this.AllPlacesForShow(this.programmation);
  }
;

  ngOnInit():void{
    this.programmation = this.progService.progra;
    console.log("******* prog service",this.programmation);
    
  
  }

  AllPlacesForShow (programmation : Programmation){
    this.placeService.getAllPlaceForAShow(programmation).subscribe({
      next : (donneesPlace)=>{ this.places = donneesPlace},
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
