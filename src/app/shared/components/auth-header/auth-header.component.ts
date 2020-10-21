import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "auth-header",
  templateUrl: "./auth-header.component.html",
  styleUrls: ["./auth-header.component.scss"],
})
export class AuthHeaderComponent implements OnInit {
  menuOpen = false;
  currentUser: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.currentUser =  this.authService.getUser();
  }

  logout() {
   
    this.authService.logOut();
  
  }
}
