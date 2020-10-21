import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/shared/services/http.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar, MatDialog } from "@angular/material";
import { CustomerRegisterDialogComponent } from "../customer-register-dialog/customer-register-dialog.component";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-customer-register-form",
  templateUrl: "./customer-register-form.component.html",
  styleUrls: ["./customer-register-form.component.scss"]
})
export class CustomerRegisterFormComponent implements OnInit {
  isLoading;
  error: any = {};
  queryParams: any = null;
  data = {
    phone_number: undefined
  };

  isPasswordHashType: string = "password";
  isRPasswordHashType: string = "password";
  isTextFieldType: boolean;

  user = {
    name: undefined,
    phone_number: undefined,
    password_hash: undefined,
    r_password_hash: undefined
  };

  constructor(
    private httpService: HttpService,
    public dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.queryParams = this.route.snapshot.queryParams;
  }

  togglePasswordFieldType() {
    this.isTextFieldType = !this.isTextFieldType;
  }
  register() {
    this.isLoading = true;
    this.httpService.create(this.user, "client-register").subscribe(
      res => {
        if (res) {
          this.isLoading = false;
          this.openDialog();
        }
      },
      error => {
        this.isLoading = false;
        this.error = error.error.errors;
        console.log(this.error);
        this.snackBar.open(error.error.message, "إغلاق ", {
          duration: 4000
        });
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomerRegisterDialogComponent, {
      width: "600px",
      data: {
        user: this.user,
        phone_number: this.user.phone_number,
        queryParams: this.queryParams
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
