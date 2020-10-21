import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { UserLogin } from "src/app/shared/models/user.model";
import { HttpService } from "src/app/shared/services/http.service";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-login-dialog",
  templateUrl: "./login-dialog.component.html",
  styleUrls: ["./login-dialog.component.scss"]
})
export class LoginDialogComponent implements OnInit {
  user: UserLogin = {
    phone_number: "",
    password_hash: undefined,
    device_name: "safari"
  };
  error: boolean = false;
  isLoading;
  isTextFieldType: boolean;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private authService: AuthService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  closeWithRes() {
    this.dialogRef.close(true);
  }

  togglePasswordFieldType() {
    this.isTextFieldType = !this.isTextFieldType;
  }

  login() {
    this.isLoading = true;
    this.httpService.create(this.user, "login").subscribe(
      res => {
        if (res) {
          this.isLoading = false;
          this.authService.saveSession(res, true);
          this.closeWithRes();
        }
      },
      error => {
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
