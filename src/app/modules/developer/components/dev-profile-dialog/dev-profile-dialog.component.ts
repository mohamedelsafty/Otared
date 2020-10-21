import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dev-profile-dialog',
  templateUrl: './dev-profile-dialog.component.html',
  styleUrls: ['./dev-profile-dialog.component.scss']
})
export class DevProfileDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DevProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
