import { Component, OnInit, Input } from "@angular/core";
import { DeveloperReservationAcceptanceComponent } from "../developer-reservation-acceptance/developer-reservation-acceptance.component";
import { DeveloperReservationRefusalComponent } from "../developer-reservation-refusal/developer-reservation-refusal.component";
import { MatDialog, MatSnackBar } from "@angular/material";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { HttpService } from "../../services/http.service";
import * as moment from "moment";
@Component({
  selector: "reservation-details",
  templateUrl: "./reservation-details.component.html",
  styleUrls: ["./reservation-details.component.scss"],
})
export class ReservationDetailsComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private httpService: HttpService,
    private snackBar: MatSnackBar
  ) {}
  @Input() reservationData: any;
  @Input() target: string;

  ngOnInit() {}

  getDate() {
    let data = this.reservationData[0];
    if (data.reservation_status === "open")
      return moment(data.created_at.split("t")[0], "YYYY-MM-DD")
        .add(data.reservation_duration, "days")
        .format("YYYY-MM-DD");
    else
      return moment(data.created_at.split("t")[0], "YYYY-MM-DD").format(
        "YYYY-MM-DD"
      );
  }

  acceptanceDialog(target: string): void {
    const dialogRef = this.dialog.open(
      DeveloperReservationAcceptanceComponent,
      {
        width: "410px",
        data: {
          reservationData: this.reservationData[0],
          target: target,
        },
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      // console.log("The dialog was closed");
    });
  }
  cancel() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "410px",
      data: {
        message: "هل انت متأكد من الغاء الحجز ؟",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log("The dialog was closed");
      if (result) {
        this.httpService
          .create(
            {},
            "real-estate-developer/reservation-set-cancel?id=" +
              this.reservationData[0].id
          )
          .subscribe((res) => {
            if (res) {
              this.snackBar.open("تم الغاء الحجز بنجاح", "إغلاق ", {
                duration: 4000,
              });
              this.reservationData[0].reservation_status = "canceled";
            }
          });
      }
    });
  }
  refuseDialog(): void {
    const dialogRef = this.dialog.open(DeveloperReservationRefusalComponent, {
      width: "410px",
      data: { reservationData: this.reservationData[0] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log("The dialog was closed");
    });
  }
}
