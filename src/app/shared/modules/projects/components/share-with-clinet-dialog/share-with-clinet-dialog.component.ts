import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { HttpService } from "src/app/shared/services/http.service";

export class ClinetShareModel {
  instances_id: number = null;
  phone_number: number = null;
  instances_unit_id: number = null;
  constructor(data) {
    this.instances_id = data.instances_id;
    this.instances_unit_id = data.instances_unit_id;
  }
}
@Component({
  selector: "app-share-with-clinet-dialog",
  templateUrl: "./share-with-clinet-dialog.component.html",
  styleUrls: ["./share-with-clinet-dialog.component.scss"],
})
export class ShareWithClinetDialogComponent implements OnInit {
  data: ClinetShareModel = new ClinetShareModel({});
  errors: any = {};
  isLoading: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<ShareWithClinetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public sendedData,
    private httpService: HttpService,
    private _snackBar: MatSnackBar
  ) {
    this.data = new ClinetShareModel(sendedData);
  }

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  send(form) {
    if (form.valid) {
      this.isLoading = true;
      this.httpService
        .create(this.data, "real-estate-developer/instance/sharing")
        .subscribe(
          (res: any) => {
            if (res) {
              this._snackBar.open(res.success, "إغلاق ", {
                duration: 4000,
              });
              this.dialogRef.close();
            }
          },
          (errors) => {
            this.isLoading = false;
            if (errors.status === 500) {
              this._snackBar.open(
                "حدث خطأ في الأرسال, يرجي المحاوله مره اخري ",
                "إغلاق ",
                {
                  duration: 4000,
                }
              );
              this.dialogRef.close();
            } else if (errors.status === 401) {
              this.errors = errors.error.error;
            }
          }
        );
    }
  }
}
