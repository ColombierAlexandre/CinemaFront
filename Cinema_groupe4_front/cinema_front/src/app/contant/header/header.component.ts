import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{
  
  
  ngAfterViewInit(): void {
    console.log("************************",this.myDiv);
    console.log("++++++++++++++++++++++++",this.myDiv.nativeElement.innerHTML)
  }

  @ViewChild('myDiv')
  myDiv!: ElementRef;

  @ViewChild('myI')
  myI!: ElementRef;

  @ViewChild('myDdm')
  myDdm!: ElementRef;

  ngOnInit(): void {
    
  }
  

    logo : string = "../assets/images/logo.jpg";

    toggleBtnIcon : any = document.querySelector('.toggle_btn i')
    dropDownMenu : any = document.querySelector('.dropdown_menu')

    // clickToggleBtn(){
    // this.myDdm.classList.toggle('open')
    //         const isOpen = this.dropDownMenu.classList.contains('open')

    //         this.toggleBtnIcon.classList = isOpen
    //             ? 'fa-solid fa-xmark'
    //             : 'fa-solid fa-bars'
    //         }
}
