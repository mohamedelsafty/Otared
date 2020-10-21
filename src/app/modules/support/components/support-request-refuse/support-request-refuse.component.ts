import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-support-request-refuse',
  templateUrl: './support-request-refuse.component.html',
  styleUrls: ['./support-request-refuse.component.scss']
})
export class SupportRequestRefuseComponent implements OnInit {
  refConfirm: boolean;

  constructor(
    public dialogRef: MatDialogRef<SupportRequestRefuseComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ref() {
    this.refConfirm = true;
  }
}
