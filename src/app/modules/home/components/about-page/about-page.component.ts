import { Component, OnInit } from '@angular/core';
import { LandingHeaderService, LandingHeaderConfig } from '../../services/landing-header.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(private landingHeaderService:LandingHeaderService) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void{
    // adjust header style
      let headerConfig:LandingHeaderConfig = {
        theme:"light",
        position: "absolute"
      }
      this.landingHeaderService.set(headerConfig)
    // document.querySelector(".header").classList.add("header--absolute");
    // document.querySelector(".header").classList.remove("header--dark");
    // document.querySelector("#logo-dark").classList.add("d-none");
    // document.querySelector("#logo-light").classList.remove("d-none");
  }
}
