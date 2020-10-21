import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-support-client-block',
  templateUrl: './support-client-block.component.html',
  styleUrls: ['./support-client-block.component.scss']
})
export class SupportClientBlockComponent implements OnInit {
  blockConfirm = false;
  constructor(
    public dialogRef: MatDialogRef<SupportClientBlockComponent>
  ) { }


  ngOnInit() { }


  onNoClick(): void {
    this.dialogRef.close();
  }
  block() {
    this.blockConfirm = true;
  }

}
