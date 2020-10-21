import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-support-new-accounts-refuse",
  templateUrl: "./support-new-accounts-refuse.component.html",
  styleUrls: ["./support-new-accounts-refuse.component.scss"]
})
export class SupportNewAccountsRefuseComponent implements OnInit {
  confirm = false;
  constructor(
    public dialogRef: MatDialogRef<SupportNewAccountsRefuseComponent>
  ) {}
  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  refuse() {
    this.confirm = true;
  }
}
