import { HttpService } from "src/app/shared/services/http.service";
import { Component, OnInit } from "@angular/core";
import { UserReset } from "src/app/shared/models/user.model";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  isTextFieldType: boolean;
  paramNum;
  isLoading;
  error;
  user: UserReset = {
    phone_number: undefined,
    password_hash: undefined,
    r_password_hash: undefined,
    token: undefined,
  };

  constructor(
    private httpService: HttpService,
    public route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    let paramNum = this.route.snapshot.queryParams;
    if ((paramNum["phone_number"], paramNum["token"])) {
      this.user.phone_number = paramNum["phone_number"];
      this.user.token = paramNum["token"];
    } else {
      this.router.navigate([`/auth/forgot-password`]);
    }
  }

  togglePasswordFieldType() {
    this.isTextFieldType = !this.isTextFieldType;
  }

  reset() {
    this.isLoading = true;
    this.httpService
      .create(
        this.user,
        `password-reset/reset?phone_number=${this.user.phone_number}&password=${this.user.password_hash}&password_confirmation=${this.user.r_password_hash}&token=${this.user.token}`
      )
      .subscribe(
        (res) => {
          if (res) {
            this.isLoading = false;
            console.log(res);
            this.router.navigate(["/auth/login"]);
            this.snackBar.open("تم تغيير كلمه السر بنجاح", "إغلاق ", {
              duration: 4000,
            });
          }
        },
        (error) => {
          if (error.status === 401) {
            this.isLoading = false;
            this.error = error.error.error["token"];
            console.log(error.error.error);
          }
        }
      );
  }
}
