import { AuthService } from "src/app/shared/services/auth.service";
import { HttpService } from "src/app/shared/services/http.service";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { SuggestionsSucsessDialogComponent } from "../suggestions-sucsess-dialog/suggestions-sucsess-dialog.component";

@Component({
  selector: "app-suggestions-form",
  templateUrl: "./suggestions-form.component.html",
  styleUrls: ["./suggestions-form.component.scss"],
})
export class SuggestionsFormComponent implements OnInit {
  suggestion = {
    title: "",
    type: null,
    details: null,
  };
  isLoading;
  userApi: string;

  constructor(
    public dialog: MatDialog,
    private httpService: HttpService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.userType();
  }

  userType() {
    let currentUser = this.authService.getUser();
    if (currentUser.type === "RealEstateDeveloper") {
      this.userApi = "real-estate-developer/new-suggestion";
    } else if (currentUser.type === "Client") {
      this.userApi = "client/new-suggestion";
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SuggestionsSucsessDialogComponent, {
      width: "385px",
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  postSuggestion() {
    this.isLoading = true;

    this.httpService.create(this.suggestion, this.userApi).subscribe(
      (res) => {
        if (res) {
          this.isLoading = false;
          console.log(res);
          this.openDialog();
        }
      },
      (error) => {
        if (error.status === 422) {
          console.log(error);
          this.isLoading = false;
          // this.snackBar.open("رقم الجوال او كلمة السر غير صحيح", "إغلاق ", {
          //   duration: 4000,
          // });
        }
      }
    );
  }
}
