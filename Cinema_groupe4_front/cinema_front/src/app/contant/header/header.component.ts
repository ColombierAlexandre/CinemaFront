import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    logo : string = "../assets/images/logo.jpg";

    toggleBtn = document.querySelector('.toggle_btn');
    toggleBtnIcon = document.querySelector('.toggle_btn i')
    dropDownMenu = document.querySelector('.dropdown_menu')

  
}
