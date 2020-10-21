import { Component, OnInit } from '@angular/core';
import { LandingHeaderService } from '../../services/landing-header.service';

@Component({
  selector: 'app-public-instances-page',
  templateUrl: './public-instances-page.component.html',
  styleUrls: ['./public-instances-page.component.scss']
})
export class PublicInstancesPageComponent implements OnInit {

  constructor(  private landingHeaderService:LandingHeaderService) { }

  ngOnInit(): void {
    this.landingHeaderService.reset();
  }

}
