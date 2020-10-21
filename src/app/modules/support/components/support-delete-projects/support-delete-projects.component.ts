import { SupportRequestRefuseComponent } from './../support-request-refuse/support-request-refuse.component';
import { MatDialog } from '@angular/material';
import { SupportRequestAcceptanceComponent } from './../support-request-acceptance/support-request-acceptance.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-delete-projects',
  templateUrl: './support-delete-projects.component.html',
  styleUrls: ['./support-delete-projects.component.scss']
})
export class SupportDeleteProjectsComponent implements OnInit {

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
