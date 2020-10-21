import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { UserLogin } from "src/app/shared/models/user.model";
import { AuthApiService } from "../../services/auth-api.service";
import { HttpService } from "src/app/shared/services/http.service";
import { AuthService } from "src/app/shared/services/auth.service";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  user: UserLogin = {
    phone_number: "",
    password_hash: undefined,
    device_name: "safari",
  };
  error: boolean = false;
  isLoading;

  isTextFieldType: boolean = false;
  constructor(
    private router: Router,
    private authService: AuthService,
    private httpService: HttpService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // this.loading = this.authService.isLoading;
  }
  togglePasswordFieldType() {
    this.isTextFieldType = !this.isTextFieldType;
  }

  // login() {
  //   this.authService.login(this.user);
  //   this.loading = this.authService.isLoading;
  // }

  login() {
    this.isLoading = true;
    this.httpService.create(this.user, "login").subscribe(
      (res) => {
        if (res) {
          this.isLoading = false;
          this.authService.saveSession(res);
        }
      },
      (error) => {
        if (error.status === 422) {
          console.log(error);
          this.error = true;
          this.isLoading = false;
          // this.snackBar.open("رقم الجوال او كلمة السر غير صحيح", "إغلاق ", {
          //   duration: 4000,
          // });
        }
      }
    );
  }
}
