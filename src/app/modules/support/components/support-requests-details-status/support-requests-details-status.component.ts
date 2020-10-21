import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-support-requests-details-status",
  templateUrl: "./support-requests-details-status.component.html",
  styleUrls: ["./support-requests-details-status.component.scss"]
})
export class SupportRequestsDetailsStatusComponent implements OnInit {
  confirm = false;

  constructor(
    public dialogRef: MatDialogRef<SupportRequestsDetailsStatusComponent>
  ) {}
  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  accept() {
    this.confirm = true;
  }
}
