import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dev-register-dialog',
  templateUrl: './dev-register-dialog.component.html',
  styleUrls: ['./dev-register-dialog.component.scss']
})
export class DevRegisterDialogComponent implements OnInit {
  currentUser;
  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<DevRegisterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.currentUser = this.authService.getUser();
   }

  onNoClick(): void {
    this.dialogRef.close();
  }

}