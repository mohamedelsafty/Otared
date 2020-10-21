import { HttpService } from "./../../../../services/http.service";
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-instance-change-state-dialog",
  templateUrl: "./instance-change-state-dialog.component.html",
  styleUrls: ["./instance-change-state-dialog.component.scss"],
})
export class InstanceChangeStateDialogComponent implements OnInit {
  reservation;
  isReserved = true;
  unit;
  dataApi;
  constructor(
    private httpService: HttpService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<InstanceChangeStateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.unit = this.data.unit;
    console.log(this.unit);
    this.reservation = this.unit.is_sold_locally;

    this.dataApi = {
      id: this.unit.id,
      is_sold_locally: this.reservation,
    };
    // console.log(this.dataApi);
  }

  changeState(state) {
    this.reservation = state;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  state() {
    this.httpService
      .create(this.dataApi, "real-estate-developer/instancesunit/sold-out")
      .subscribe(
        (res) => {
          if (res) {
            console.log(res);
            this._snackBar.open(res["error"], "إغلاق ", {
              duration: 4000,
            });
          }
        },
        (error) => {
          if (error) {
            console.log(error);
            this._snackBar.open(error["error"], "إغلاق ", {
              duration: 4000,
            });
          }
        }
      );
  }

  confirm() {
    this.state();
    this.onNoClick();
  }
}
