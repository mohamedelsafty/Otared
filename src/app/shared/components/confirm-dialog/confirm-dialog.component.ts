import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  title: string;
  message: string;
  btn:{
    yesBtn:string,
    noBtn:string
  }

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.title = data.title || "تأكيد";
    this.message = data.message || "هل انت متأكد ؟";
    this.btn = data.btn || {yesBtn: 'نعم', noBtn: 'لا'};
    
  }

  ngOnInit() {
  }

  onDismiss(value): void {
    this.dialogRef.close(value);
  }
}