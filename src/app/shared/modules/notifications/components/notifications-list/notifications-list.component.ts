import { Router } from "@angular/router";
import { HttpService } from "src/app/shared/services/http.service";
import { Component, OnInit } from "@angular/core";
import { NotificationsService } from "../../services/notifications.service";

@Component({
  selector: "app-notifications-list",
  templateUrl: "./notifications-list.component.html",
  styleUrls: ["./notifications-list.component.scss"],
})
export class NotificationsListComponent implements OnInit {
  constructor(
    public notificationsService: NotificationsService,
    private httpService: HttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.notificationsService.findAll();
  }
}
