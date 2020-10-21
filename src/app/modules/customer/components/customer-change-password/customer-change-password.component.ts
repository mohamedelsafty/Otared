import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { HttpService } from "src/app/shared/services/http.service";

@Component({
  selector: "app-customer-change-password",
  templateUrl: "./customer-change-password.component.html",
  styleUrls: ["./customer-change-password.component.scss"],
})
export class CustomerChangePasswordComponent implements OnInit {
  isLoading = false;
  passwordObj = {
    current_password: null,
    new_password: null,
    new_confirm_password: null,
  };
  isPasswordHashType: string = "password";
  isRPasswordHashType: string = "password";
  isOldPasswordHashType: string = "password";
  isTextFieldType: boolean;
  user;
  constructor(
    public dialogRef: MatDialogRef<CustomerChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private httpService: HttpService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  changePassword() {
    this.isLoading = true;
    this.httpService
      .create(this.passwordObj, "client/change-password")
      .subscribe((res) => {
        if (res) {
          console.log(res);
          this.isLoading = false;
          this.onNoClick();
          this.snackBar.open(res["success"], "إغلاق ", {
            duration: 4000,
          });
        }
      });
  }
}
