import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-client-delete',
  templateUrl: './support-client-delete.component.html',
  styleUrls: ['./support-client-delete.component.scss']
})
export class SupportClientDeleteComponent implements OnInit {
  deleteConfirm = false;
  constructor(
    public dialogRef: MatDialogRef<SupportClientDeleteComponent>
  ) { }


  ngOnInit() { }


  onNoClick(): void {
    this.dialogRef.close();
  }
  delete() {
    this.deleteConfirm = true;
  }

}
