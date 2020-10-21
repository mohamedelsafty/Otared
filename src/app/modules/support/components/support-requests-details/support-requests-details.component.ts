import { Component, OnInit } from "@angular/core";
import { SupportRequestsDetailsStatusComponent } from "../support-requests-details-status/support-requests-details-status.component";
import { MatDialog } from "@angular/material";
import { SupportRequestsDetailsRefuseComponent } from "../support-requests-details-refuse/support-requests-details-refuse.component";

@Component({
  selector: "app-support-requests-details",
  templateUrl: "./support-requests-details.component.html",
  styleUrls: ["./support-requests-details.component.scss"]
})
export class SupportRequestsDetailsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  acceptanceDialog(): void {
    const dialogRef = this.dialog.open(SupportRequestsDetailsStatusComponent, {
      width: "410px"
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
  refuseDialog(): void {
    const dialogRef = this.dialog.open(SupportRequestsDetailsRefuseComponent, {
      width: "410px"
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
