import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LandingHeaderConfig, LandingHeaderService } from 'src/app/modules/home/services/landing-header.service';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {
  headerConfig: LandingHeaderConfig = new LandingHeaderConfig();
  constructor(
    private http:HttpService,
    public auth: AuthService,
    private landingHeaderService:LandingHeaderService
  ) { }

  @Input() isPersonalHeader: boolean = false;

  ngOnInit(): void {
    this.landingHeaderService.headerConfig.subscribe((config:LandingHeaderConfig)=>{
      this.headerConfig = config;
    })
    console.log(this.auth.getUser());
    console.log(this.auth.isLoggedIn())
  }

}
