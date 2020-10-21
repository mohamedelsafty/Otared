import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/shared/services/http.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private httpService: HttpService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  isLoading;
  error: string = "";
  data = {
    phone_number: undefined,
  };

  ngOnInit(): void {}

  reset() {
    this.isLoading = true;
    this.httpService.create(this.data, "password-reset/create").subscribe(
      (res: any) => {
        if (res) {
          this.isLoading = false;
          this.router.navigate([`/auth/verify`], {
            queryParams: { phone_number: this.data.phone_number },
          });

          this.snackBar.open(res.message, "إغلاق ", {
            duration: 4000,
          });
        }
      },
      (error) => {
        this.isLoading = false;
        if (error.status == 401) {
          this.error = error.error.error.phone_number;
          console.log(this.error);
        }
      }
    );
  }
}
