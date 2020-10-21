import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-support-new-accounts-acceptance",
  templateUrl: "./support-new-accounts-acceptance.component.html",
  styleUrls: ["./support-new-accounts-acceptance.component.scss"]
})
export class SupportNewAccountsAcceptanceComponent implements OnInit {
  confirmReservation = false;
  constructor(
    public dialogRef: MatDialogRef<SupportNewAccountsAcceptanceComponent>
  ) {}
  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  accept() {
    this.confirmReservation = true;
  }
}
