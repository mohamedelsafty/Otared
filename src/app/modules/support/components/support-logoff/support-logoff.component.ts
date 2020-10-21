import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-support-logoff',
  templateUrl: './support-logoff.component.html',
  styleUrls: ['./support-logoff.component.scss']
})
export class SupportLogoffComponent implements OnInit {
  refConfirm: boolean;

  constructor(
    public dialogRef: MatDialogRef<SupportLogoffComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ref() {
    this.refConfirm = true;
  }

}
