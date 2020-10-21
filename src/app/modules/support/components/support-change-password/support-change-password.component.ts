import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-support-change-password',
  templateUrl: './support-change-password.component.html',
  styleUrls: ['./support-change-password.component.scss']
})
export class SupportChangePasswordComponent implements OnInit {
  isTextFieldType: boolean;
  acceptConfirm: boolean;

  constructor(
    public dialogRef: MatDialogRef<SupportChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  accept() {
    this.acceptConfirm = true;
  }

  togglePasswordFieldType() {
    this.isTextFieldType = !this.isTextFieldType;
  }

}
