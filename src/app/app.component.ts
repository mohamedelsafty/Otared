import { Component } from "@angular/core";
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "otared";
  constructor(private authService:AuthService){
    this.authService.autoLogin();
  }
}
