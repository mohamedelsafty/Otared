import { Component, OnInit } from '@angular/core';
import { contactForm } from "src/app/shared/models/landing.model";
import { HttpService } from 'src/app/shared/services/http.service';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-home-base',
  templateUrl: './home-base.component.html',
  styleUrls: ['./home-base.component.scss']
})
export class HomeBaseComponent implements OnInit {
  
  contactForm: contactForm = new contactForm();

  isLoading:boolean = false;
  contactFormSuccess:boolean = false;
  contactFormError:boolean = false;

  isUserLogged: any = {};
  
  constructor(
    private http:HttpService,
    public auth: AuthService
    ) { }

  ngOnInit(): void {
    
  }


  contactUs() {
    this.isLoading = true;
    this.http.create(this.contactForm, 'contact', 'landingApi').subscribe(
      res => {
        if (res){
          this.contactFormSuccess = true;
          this.isLoading = false;
        }
      },
      error => {
        if(error.status === 422){
          this.contactFormError = true;
          this.isLoading = false;
        }
      }
    );
  }
}
