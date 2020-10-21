import { Router } from "@angular/router";
import { HttpService } from "src/app/shared/services/http.service";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import * as moment from "moment";
@Component({
  selector: "app-developer-reservation-acceptance",
  templateUrl: "./developer-reservation-acceptance.component.html",
  styleUrls: ["./developer-reservation-acceptance.component.css"],
})
export class DeveloperReservationAcceptanceComponent implements OnInit {
  confirmReservation = false;
  confirmReservationSuccess = false;
  reservation;
  reservationResult;
  duration;
  target: string = "acceptance";
  isLoading: boolean = false;
  end: any;
  constructor(
    public dialogRef: MatDialogRef<DeveloperReservationAcceptanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private httpService: HttpService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.reservation = this.data.reservationData;
    this.target = this.data.target;
    this.duration = this.reservation.reservation_duration;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  //   this.router.navigate(["/developer/reservations-requests"]);
  // }

  //   onNoClick(): void {
  //   this.dialogRef.close();
  //   this.router.navigate(["/developer/reservations-requests"]);
  // }

  postAcceptance() {
    this.isLoading = true;
    const data = {
      id: this.reservation.id,
      reservation_duration: this.duration
    };
    return this.httpService
      .create(data, "real-estate-developer/reservation-request/accept")
      .subscribe((res) => {
        this.isLoading = false;
        if (res["success"]) {
          this.reservationResult = res["success"].realestatedeveloper;
          this.end = moment( this.reservationResult.created_at.split('t')[0], "YYYY-MM-DD").add(this.reservationResult.reservation_duration, 'days').format("YYYY-MM-DD")
          this.confirmReservation = true;
          this.confirmReservationSuccess = true;
        } else {
          this.confirmReservation = true;
          this.confirmReservationSuccess = false;
          this.reservationResult = res;
        }
      });
  }

  postExtension() {
    const data = {
      id: this.reservation.id,
      reservation_duration: this.duration,
    };
    return this.httpService
      .create(data, "real-estate-developer/reservation-request/extande")
      .subscribe((res) => {
        if (res["success"]) {
          this.reservationResult = res["success"].Reservation;
          this.end = moment( this.reservationResult.created_at.split('t')[0], "YYYY-MM-DD").add(this.reservationResult.reservation_duration, 'days').format("YYYY-MM-DD")
          this.confirmReservation = true;
          this.confirmReservationSuccess = true;
        } else {
          this.confirmReservation = true;
          this.confirmReservationSuccess = false;
          this.reservationResult = res;
        }
      });
  }
}
