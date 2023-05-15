import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  film : Film[] = [];

  constructor(private filmService : FilmService, private router : Router){}

  ngOnInit(){
    
  }

  affiche_front : string = "../assets/images/django.jpg"

}
