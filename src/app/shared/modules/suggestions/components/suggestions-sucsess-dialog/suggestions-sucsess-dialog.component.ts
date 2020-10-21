import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-suggestions-sucsess-dialog",
  templateUrl: "./suggestions-sucsess-dialog.component.html",
  styleUrls: ["./suggestions-sucsess-dialog.component.scss"],
})
export class SuggestionsSucsessDialogComponent implements OnInit {
  userRouter: string;

  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<SuggestionsSucsessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.userType();
  }

  userType() {
    let currentUser = this.authService.getUser();
    if (currentUser.type === "RealEstateDeveloper") {
      this.userRouter = "developer/dashboard";
    } else if (currentUser.type === "Client") {
      this.userRouter = "/customer";
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
