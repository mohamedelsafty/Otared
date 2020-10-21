import { Injectable } from "@angular/core";
import { ReservationsModule } from "../reservations.module";
import { MatSnackBar, MatDialog } from "@angular/material";
import { HttpService } from "src/app/shared/services/http.service";
import { DataResponse } from "src/app/shared/models/data-response.model";
import { Resrvation } from "../models/reservation.model";
import { DeveloperReservationAcceptanceComponent } from "src/app/shared/components/developer-reservation-acceptance/developer-reservation-acceptance.component";
import { DeveloperReservationRefusalComponent } from "src/app/shared/components/developer-reservation-refusal/developer-reservation-refusal.component";
import { ConfirmDialogComponent } from "src/app/shared/components/confirm-dialog/confirm-dialog.component";

@Injectable({
  providedIn: "root",
})
export class ReservationsService {
  isLoading: boolean = false;
  isSaving: boolean = false;
  reservations: Resrvation[] = [];
  reservation: Resrvation = new Resrvation();
  total: number = 1;
  perPage: number = 15;
  page: number = 1;
  targetFilter: string = null;
  isSearch: boolean = false;
  constructor(
    private httpService: HttpService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  // 1- get all
  public findAll(
    page?: number,
    targeData: string = "reservationsRequests",
    silent?: boolean
  ) {
    if (!silent) this.isLoading = true;
    let url = "real-estate-developer/reservation-request-show-all";
    if (targeData === "reservations")
      url = "real-estate-developer/reservation-show-all";
    if (page && page > 1) url += "?page=" + page;
    this.httpService.getAll(url).subscribe((res: DataResponse) => {
      if (res && res.success) {
        this.isLoading = false;
        this.reservations = res.success.data;
        this.setPagination(res);
      } else {
        this.reservations = [];
      }
    });
  }

  //2- set filter
  public setFilter(targetFilter) {
    this.targetFilter = targetFilter;
  }

  public filter(): Resrvation[] {
    if (this.targetFilter) {
      let targetFilterCapitalized =
        this.targetFilter.charAt(0).toUpperCase() + this.targetFilter.slice(1);
      return this.reservations.filter(
        (resrvation: Resrvation) =>
          resrvation.reservation_status === this.targetFilter ||
          resrvation.reservation_status === targetFilterCapitalized
      );
    } else return this.reservations.slice();
  }

  //4- get visit with id
  public findRecord(id, targeData: string = "reservationsRequests") {
    let url = "real-estate-developer/reservation-request-get?id=";
    if (targeData === "reservations")
      url = "real-estate-developer/reservation-get-by-id?id=";
    this.isLoading = true;
    this.httpService.getAll(url + id).subscribe((res: any) => {
      if (targeData === "reservations")
        this.reservation = res.success.Reservation[0];
      else this.reservation = res.success[0];
      this.isLoading = false;
    });
  }
  //5- search
  public search(key?: string, targeData: string = "reservationsRequests") {
    if (key) {
      this.doSearch(key, targeData);
    } else {
      this.findAll();
    }
  }

  //6- Do search
  private doSearch(key: string, targeData: string = "reservationsRequests") {
    let url = "real-estate-developer/search-in-reservation-request";
    if (targeData === "reservations")
      url = "real-estate-developer/search-in-reservation";
    this.isLoading = true;
    this.httpService
      .create({ query_value: key }, url)
      .subscribe((res: DataResponse) => {
        if (res && res.success) {
          this.reservations = res.success.data;
          this.setPagination(res);
        } else {
          this.reservations = [];
        }
        this.isLoading = false;
      });
  }
  acceptance(obj): void {
    const dialogRef = this.dialog.open(
      DeveloperReservationAcceptanceComponent,
      {
        width: "410px",
        data: {
          reservationData: obj,
          target: "acceptance",
        },
      }
    );
    this.findAll(this.page, "reservations-request", true);
  }
  extande(obj): void {
    const dialogRef = this.dialog.open(
      DeveloperReservationAcceptanceComponent,
      {
        width: "410px",
        data: {
          reservationData: obj,
          target: "extande",
        },
      }
    );
    dialogRef.afterClosed().subscribe((result) => {
      this.findAll(this.page, "reservations", true);
    });
  }
  refuse(obj): void {
    const dialogRef = this.dialog.open(DeveloperReservationRefusalComponent, {
      width: "410px",
      data: { reservationData: obj },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.findAll(this.page, "reservations-request", true);
    });
  }
  cancel(id) {
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
          .create({}, "real-estate-developer/reservation-set-cancel?id=" + id)
          .subscribe((res) => {
            if (res) {
              this.snackBar.open("تم الغاء الحجز بنجاح", "إغلاق ", {
                duration: 4000,
              });
              this.findAll(this.page, "reservations", true);
            }
          });
      }
    });
  }
  //9-set Pagination **need to move to utility service**
  private setPagination(res: DataResponse) {
    this.page = res.success.current_page;
    this.total = res.success.total;
    this.perPage = res.success.per_page;
  }
  public reset() {
    this.isLoading = false;
    this.isSaving = false;
    this.reservations = [];
    this.reservation = new Resrvation();
    this.total = 1;
    this.perPage = 15;
    this.page = 1;
    this.targetFilter = null;
    this.isSearch = false;
  }
}
