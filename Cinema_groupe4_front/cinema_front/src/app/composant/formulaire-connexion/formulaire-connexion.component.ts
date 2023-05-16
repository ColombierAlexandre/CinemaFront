import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-formulaire-connexion',
  templateUrl: './formulaire-connexion.component.html',
  styleUrls: ['./formulaire-connexion.component.css']
})
export class FormulaireConnexionComponent implements OnInit{

  utilisateurs : Utilisateur[] = []; 
  
  constructor(private utilisateurService : UtilisateurService){}
  
  ngOnInit(): void {
    this.getAllUtilisateurs();
  }

  getAllUtilisateurs(){
    this.utilisateurService.getAllUtilisateursBo().subscribe({
      next : (dataUtilisateurs)=>{this.utilisateurs = dataUtilisateurs},
      error : (erreur)=>{console.log(erreur)},
      complete : ()=>{}
    });
  }

signup = document.getElementById('signUp');
signin = document.getElementById('signIn');

// showSignup(){
//     this.signin.style.display = "none";
//     this.signup.style.display = "block";
// }

// hideSignup(){
//     this.signin.style.display = 'block';
//     this.signup.style.display = 'none';
// }

}
