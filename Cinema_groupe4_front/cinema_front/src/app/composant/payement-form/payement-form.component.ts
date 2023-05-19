import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/model/cinema';
import { Place } from 'src/app/model/place';
import { Utilisateur } from 'src/app/model/utilisateur';
import { CinemaService } from 'src/app/service/cinema.service';
import { PlaceService } from 'src/app/service/place.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-payement-form',
  templateUrl: './payement-form.component.html',
  styleUrls: ['./payement-form.component.css']
})
export class PayementFormComponent {
  constructor(private placeService : PlaceService, private cinemaService : CinemaService, private utilisateurService : UtilisateurService, 
    private router : Router){}
    
    place : Place | any
    cinema : Cinema | undefined
    utilisateur : Utilisateur | undefined
  
  ngOnInit() : void {
    this.place = this.placeService.place
    this.cinema = this.cinemaService.cinema
    this.utilisateur = this.utilisateurService.utilisateur
  }
  
  validerPaiement(){
    try {
      this.place.isUsed(true)
      console.log(this.place.isUsed())
      this.placeService.updatePlace(this.place)
    } catch (error) {
      
    }
  
    this.cinemaService.cinema = this.cinema
    this.utilisateurService.utilisateur = this.utilisateur
    this.router.navigateByUrl("/accueil")
  }
  

  


  tColorA = document.getElementById('tColorA');
  tColorB = document.getElementById('tColorB');
  tColorC = document.getElementById('tColorC');
  iconA = document.querySelector('.fa-credit-card');
  iconB = document.querySelector('.fa-building- columns');
  iconC = document.querySelector('.fa-wallet');
  cDetails = document.querySelector('.card-details');

  // doFun(){
  //     tColorA.style.color = "greenyellow";
  //     tColorB.style.color = "#444"
  //     tColorC.style.color = "#444"
  //     iconA.style.color = "greenyellow";
  //     iconB.style.color = "#aaa";
  //     iconC.style.color = "#aaa";
  //     cDetails.style.display = "block";
  // }
  // doFunA(){
  //     tColorA.style.color = "#444";
  //     tColorB.style.color = "greenyellow"
  //     tColorC.style.color = "#444"
  //     iconA.style.color = "#aaa";
  //     iconB.style.color = "greenyellow";
  //     iconC.style.color = "#aaa";
  //     cDetails.style.display = "block";
  // }
  // doFunB(){
  //     tColorA.style.color = "#444";
  //     tColorB.style.color = "#444"
  //     tColorC.style.color = "greenyellow"
  //     iconA.style.color = "#aaa";
  //     iconB.style.color = "#aaa";
  //     iconC.style.color = "greenyellow";
  //     cDetails.style.display = "block";
  // }
  
  // cNumber = document.getElementById('number');
  // cNumber.addEventListener('keyup', function(e){
  
  //     let num = cNumber.value;
  
  //     let newValue = '';
  //     num = num.replace(/\s/g, '');
  //     for(var i = 0; i < num.length; i++){
  //         if(i%4 == 0 && i > 0) 
  //         newValue = newValue.concat(' ')
  //         newValue = newValue.concat(num[i]);
  //         cNumber.value = newValue;
  //     }
  
  //     let ccNum = document.getElementById('c-number');
  //     if(num.length<16){
  //         ccNum.style.border = "1px solid red";
  //     }else{
  //         ccNum.style.border = "1px solid greenyellow";
  //     }
  // });
  
  // eDate = document.getElementById('e-date');
  // eDate.addEventListener('keyup', function(e){
  
  //     let newInput = eDate.value;
  
  //     if(e.which !==8){
  //         var numChars = e.target.value.length;
  //         if(numChars == 2){
  //             var thisVal = e.target.value;
  //             thisVal += '/';
  //             e.target.value = thisVal;
  //             console.log(thisVal.length)
  //         }
  //     }
  //     if(newInput.length < 5){
  //         eDate.style.border = "1px solid red";
  //     }else{
  //         eDate.style.border = "1px solid greenyellow";
  //     }
  // });
  
  // cvv = document.getElementById('cvv');
  // cvv.addEventListener('keyup', function(e){
  
  //     let elen = cvv.value;
  //     let cvvBox = document.getElementById('cvv-box');
  //     if(elen.length<3){
  //         ccNum.style.border = "1px solid red";
  //     }else{
  //         ccNum.style.border = "1px solid greenyellow";
  //     }
  // })
}
