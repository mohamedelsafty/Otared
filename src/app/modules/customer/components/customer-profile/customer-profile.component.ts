import { AuthService } from "src/app/shared/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { CustomerChangePasswordComponent } from "../customer-change-password/customer-change-password.component";
import { MatDialog, MatSnackBar } from "@angular/material";
import { HttpService } from "src/app/shared/services/http.service";
/**
 * @title Basic expansion panel
 */
@Component({
  selector: "app-customer-profile",
  templateUrl: "./customer-profile.component.html",
  styleUrls: ["./customer-profile.component.scss"],
})
export class CustomerProfileComponent implements OnInit {
  panelOpenState = false;
  isLoading: boolean = true;
  user: any = {};
  isEdit: boolean = false;
  userForm: any = {
    id_number: undefined,
    email: undefined,
    client_name: undefined,
  };
  constructor(
    private snackBar: MatSnackBar,
    public authService: AuthService,
    public dialog: MatDialog,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.getProfileInfo();
  }
  getProfileInfo() {
    this.isLoading = true;
    this.httpService.getAll("client/show-info").subscribe((res: any) => {
      if (res) {
        this.isLoading = false;
        this.user = res.data.Client;
        this.user.personal_picture_path = res.data.personal_picture_path;
        this.userForm.client_name = res.data.Client.name;
        if (res.data.Client.id_number)
          this.userForm.id_number = res.data.Client.id_number;
        if (res.data.Client.email) this.userForm.email = res.data.Client.email;
      }
    });
  }
  saveData() {
    this.httpService
      .create(this.userForm, "client/complete-registration")
      .subscribe((res) => {
        this.isLoading = false;
        this.isEdit = false;
        this.getProfileInfo();
        this.snackBar.open("تم الحفظ بنجاح", "إغلاق ", {
          duration: 4000,
        });
      });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CustomerChangePasswordComponent, {
      width: "600px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
