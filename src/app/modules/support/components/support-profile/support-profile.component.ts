import { SupportLogoffComponent } from './../support-logoff/support-logoff.component';
import { SupportChangePasswordComponent } from './../support-change-password/support-change-password.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-profile',
  templateUrl: './support-profile.component.html',
  styleUrls: ['./support-profile.component.scss']
})
export class SupportProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }
  logoffDialog(): void {
    const dialogRef = this.dialog.open(
      SupportLogoffComponent,
      {
        width: "380px",
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  passwordDialog(): void {
    const dialogRef = this.dialog.open(SupportChangePasswordComponent, {
      width: "250px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }


}
