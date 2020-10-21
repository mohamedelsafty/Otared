import { Router } from "@angular/router";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { HttpService } from "../../services/http.service";
import { ReservationsService } from '../../modules/reservations/services/reservations.service';

@Component({
  selector: "app-developer-reservation-refusal",
  templateUrl: "./developer-reservation-refusal.component.html",
  styleUrls: ["./developer-reservation-refusal.component.css"],
})
export class DeveloperReservationRefusalComponent implements OnInit {
  refuseConfirm = false;
  reservation;
  reservationResult;
  refuse_reason: string;
  reservationDays = [];

  constructor(
    public dialogRef: MatDialogRef<DeveloperReservationRefusalComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private httpService: HttpService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.reservation = this.data.reservationData;
    // console.log(this.reservation);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  refuse() {
    this.refuseConfirm = true;
  }

  postRefusal() {
    const data = {
      id: this.reservation.id,
      refuse_reason: this.refuse_reason,
    };

    return this.httpService
      .create(data, "real-estate-developer/reservation-request/refuse")
      .subscribe((res) => {
        if (res["success"]) {
          // console.log(res);
          this.reservationResult = res["success"].realestatedeveloper;
          this.refuseConfirm = true;
        } else {
          console.log(res);
        }
      });
  }

  navigate() {
    this.router.navigate(["/developer/reservations-requests"]);
  }

  ngOnDestroy() {
    this.postRefusal().unsubscribe();
  }
}
