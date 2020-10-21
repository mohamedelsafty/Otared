import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-support-request-acceptance',
  templateUrl: './support-request-acceptance.component.html',
  styleUrls: ['./support-request-acceptance.component.scss']
})
export class SupportRequestAcceptanceComponent implements OnInit {
  acceptConfirm: boolean;

  constructor(
    public dialogRef: MatDialogRef<SupportRequestAcceptanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  accept() {
    this.acceptConfirm = true;
  }

}
