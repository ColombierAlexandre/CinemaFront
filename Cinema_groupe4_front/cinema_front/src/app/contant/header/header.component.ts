import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit, OnInit{
  
  logo : string = "../assets/images/logo.jpg";

  ngOnInit(): void {
  }

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

  clickToggleBtn(){
    this.myDdm.nativeElement.classList.toggle('open')
    const isOpen = this.myDdm.nativeElement.classList.contains('open')

    this.myI.nativeElement.classList = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
  }
}
