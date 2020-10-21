import { Component, OnInit } from '@angular/core';
import { LandingHeaderConfig, LandingHeaderService } from '../../services/landing-header.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(private landingHeaderService:LandingHeaderService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{
    // adjust header style
    let headerConfig:LandingHeaderConfig = {
      theme:"dark",
      position: "relative"
    }
    this.landingHeaderService.set(headerConfig)
    // document.querySelector(".header").classList.remove("header--absolute");
    // document.querySelector(".header").classList.add("header--dark");
    // document.querySelector("#logo-dark").classList.remove("d-none");
    // document.querySelector("#logo-light").classList.add("d-none");
  }
  
}
