import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-support-requests-details-refuse",
  templateUrl: "./support-requests-details-refuse.component.html",
  styleUrls: ["./support-requests-details-refuse.component.scss"]
})
export class SupportRequestsDetailsRefuseComponent implements OnInit {
  confirm = false;

  constructor(
    public dialogRef: MatDialogRef<SupportRequestsDetailsRefuseComponent>
  ) {}
  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  accept() {
    this.confirm = true;
  }
}
