import { Injectable } from "@angular/core";
import { NotificationModel } from "../models/notification.model";
import { HttpService } from "src/app/shared/services/http.service";
import { DataResponse } from "src/app/shared/models/data-response.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  isLoading: boolean = false;
  isSaving: boolean = false;
  notifications: NotificationModel[] = [];
  total: number = 1;
  perPage: number = 15;
  page: number = 1;
  targetFilter: string = null;
  isSearch: boolean = false;
  constructor(private httpService: HttpService, private router: Router) {}

  public findAll(page?: number) {
    let url = "Notifications?itemsPerPage=" + this.perPage;
    if(page){
      url += "&page=" + page;
    }
    this.isLoading = true;
    return this.httpService.getAll(url).subscribe((res: DataResponse) => {
      if (res) {
        this.isLoading = false;
        this.notifications = res["data"];
        this.setPagination(res);
      } else {
        this.notifications = [];
        this.isLoading = false;
      }
    });
  }

  // api notification mark as read
  notificationsMark(data) {
    this.httpService
      .getById(data.id, "Notifications/mark-as-read")
      .subscribe((res) => {
        if (res) {
          console.log(res);
        }
      });
  }

  // go to notification details page
  details(data) {
    this.notificationsMark(data);
    if (data.url_reference_type == 1) {
      this.router.navigate([
        `/developer/reservations/show/${data.url_reference_id}`,
      ]);
    }
    if (data.url_reference_type == 2) {
      this.router.navigate([`/developer/visits/show/${data.url_reference_id}`]);
    }
  }

  private setPagination(res: DataResponse) {
    this.page = res.meta.current_page;
    this.total = res.meta.total;
    this.perPage = res.meta.per_page;
  }
}
