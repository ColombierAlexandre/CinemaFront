import { Component } from '@angular/core';
import { Programmation } from 'src/app/model/programmation';
import { ProgrammationService } from 'src/app/service/programmation.service';
import { Film } from 'src/app/model/film';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-programmation',
  templateUrl: './liste-programmation.component.html',
  styleUrls: ['./liste-programmation.component.css']
})
export class ListeProgrammationComponent {
    prog : Programmation[] = [];
    constructor(private progService : ProgrammationService, private router : ActivatedRoute, private newroute : Router){}

    ngOnInit():void{
      this.router.params.subscribe(params => {
        const filmid = +params['id'];
        this.getListeProgrammationsByFilm(filmid);
    })
  }

    getListeProgrammationsByFilm(filmId : number){
        this.progService.getProgByFilm(filmId).subscribe({
          next : (donneesProg)=>{ this.prog = donneesProg},
          error : (erreur)=>{ console.log(erreur)},
          complete : ()=>{}
        })

    }
    getListeProgrammations(){
      this.progService.getAllProg().subscribe({
        next : (donneesProg)=>{ this.prog = donneesProg},
        error : (erreur)=>{ console.log(erreur)},
        complete : ()=>{}
          })
    }

    AllerVersReservation(programmation : Programmation ){
      this.newroute.navigate(['/places',programmation]);
    }

}
