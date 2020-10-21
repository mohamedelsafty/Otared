import { Router } from "@angular/router";
import { HttpService } from "./../../../../shared/services/http.service";
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AuthService } from "src/app/shared/services/auth.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-customer-register-dialog",
  templateUrl: "./customer-register-dialog.component.html",
  styleUrls: ["./customer-register-dialog.component.scss"]
})
export class CustomerRegisterDialogComponent implements OnInit {
  isLoading = false;
  user = {
    phone_number: this.data.phone_number,
    token: null
  };
  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<CustomerRegisterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private httpService: HttpService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  login() {
    this.isLoading = true;
    this.httpService.create(this.data.user, "login").subscribe(res => {
      if (res) {
        this.isLoading = false;
        this.authService.saveSession(res, true);
        if (this.data.queryParams.next) {
          this.router.navigate([this.data.queryParams.next], {
            queryParams: { instatnceId: this.data.queryParams.instatnceId }
          });
        } else {
          this.authService.redirectToCorrectRoute();
        }
        this.onNoClick();
      }
    });
  }

  activateUser() {
    this.isLoading = true;
    this.httpService.create(this.user, "client-account-activation").subscribe(
      res => {
        if (res) {
          this.isLoading = false;
          if (this.data.queryParams) {
            this.login();
          } else {
            this.onNoClick();
            this.router.navigate(["/auth/login"]);
          }

          this.snackBar.open(res["message"], "إغلاق ", {
            duration: 4000
          });
        }
      },
      error => {
        if (error) {
          console.log(error);
          this.snackBar.open("الرجاء التأكد من رقم التغعيل", "إغلاق ", {
            duration: 4000
          });
        }
      }
    );
  }
}
