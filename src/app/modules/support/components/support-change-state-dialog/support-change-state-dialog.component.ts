import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-support-change-state-dialog",
  templateUrl: "./support-change-state-dialog.component.html",
  styleUrls: ["./support-change-state-dialog.component.scss"],
})
export class SupportChangeStateDialogComponent implements OnInit {
  reservation = true;
  isReserved = true;
  constructor(
    public dialogRef: MatDialogRef<SupportChangeStateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  changeState(state) {
    this.reservation = state;
  }
  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
