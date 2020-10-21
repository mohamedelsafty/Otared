import { SupportRequestRefuseComponent } from './../support-request-refuse/support-request-refuse.component';
import { SupportRequestAcceptanceComponent } from './../support-request-acceptance/support-request-acceptance.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-details-projects',
  templateUrl: './support-details-projects.component.html',
  styleUrls: ['./support-details-projects.component.scss']
})
export class SupportDetailsProjectsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }
  acceptDialog(): void {
    const dialogRef = this.dialog.open(
      SupportRequestAcceptanceComponent,
      {
        width: "380px",
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  refDialog(): void {
    const dialogRef = this.dialog.open(SupportRequestRefuseComponent, {
      width: "380px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

}
