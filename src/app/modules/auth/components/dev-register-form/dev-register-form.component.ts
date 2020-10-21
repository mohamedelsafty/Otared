import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DevRegisterDialogComponent } from "../dev-register-dialog/dev-register-dialog.component";
import { UserRegister } from "src/app/shared/models/user.model";
import { HttpService } from "src/app/shared/services/http.service";
import { MatSnackBar } from "@angular/material";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-dev-register-form",
  templateUrl: "./dev-register-form.component.html",
  styleUrls: ["./dev-register-form.component.scss"],
})
export class DevRegisterFormComponent implements OnInit {
  user: UserRegister = {
    personal_name: undefined,
    commercial_name: undefined,
    commercial_registration_no: undefined,
    commercial_registration_idnumber: undefined,
    phone_number: undefined,
    city_id: 1,
    password_hash: undefined,
    r_password_hash: undefined,
  };
  cities;
  isLoading;
  isTextFieldType: boolean;

  errors: any = {};
  isPasswordHashType: string = "password";
  isRPasswordHashType: string = "password";

  constructor(
    public dialog: MatDialog,
    private httpService: HttpService,
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.getCity();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DevRegisterDialogComponent, {
      width: "600px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
  togglePasswordFieldType() {
    this.isTextFieldType = !this.isTextFieldType;
  }

  getCity() {
    this.httpService.getAll("get-all-cities").subscribe((res) => {
      if (res) {
        this.cities = res["success"];
      }
    });
  }

  register() {
    this.isLoading = true;
    this.user.city_id = Number(this.user.city_id);
    this.httpService.create(this.user, "developer-register").subscribe(
      (res) => {
        if (res) {
          this.isLoading = false;
          this.login();
        }
      },
      (error) => {
        if (error.status === 401) {
          this.isLoading = false;
          this.errors = error.error.error;
          this.snackBar.open(error.error.error.phone_number, "إغلاق ", {
            duration: 4000,
          });
        }
      }
    );
  }
  login() {
    let data = {
      phone_number: this.user.phone_number,
      password_hash: this.user.password_hash,
      device_name: "safari",
    };
    this.isLoading = true;
    this.httpService.create(data, "login").subscribe(
      (res) => {
        if (res) {
          this.isLoading = false;
          this.authService.saveSession(res, true);
          this.openDialog();
        }
      },
      (error) => {
        if (error.status === 422) {
          this.isLoading = false;
        }
      }
    );
  }
}
