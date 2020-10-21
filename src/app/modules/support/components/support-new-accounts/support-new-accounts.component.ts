import { MatDialog } from "@angular/material";
import { Component, OnInit } from "@angular/core";
import { SupportNewAccountsAcceptanceComponent } from "../support-new-accounts-acceptance/support-new-accounts-acceptance.component";
import { SupportNewAccountsRefuseComponent } from "../support-new-accounts-refuse/support-new-accounts-refuse.component";

@Component({
  selector: "app-support-new-accounts",
  templateUrl: "./support-new-accounts.component.html",
  styleUrls: ["./support-new-accounts.component.scss"]
})
export class SupportNewAccountsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  acceptanceDialog(): void {
    const dialogRef = this.dialog.open(SupportNewAccountsAcceptanceComponent, {
      width: "410px"
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

  refuseeDialog(): void {
    const dialogRef = this.dialog.open(SupportNewAccountsRefuseComponent, {
      width: "410px"
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
