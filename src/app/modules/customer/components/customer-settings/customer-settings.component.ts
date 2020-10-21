import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/shared/services/http.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-customer-settings",
  templateUrl: "./customer-settings.component.html",
  styleUrls: ["./customer-settings.component.scss"],
})
export class CustomerSettingsComponent implements OnInit {
  constructor(
    private httpService: HttpService,
    private _snackBar: MatSnackBar
  ) {}

  settings = {
    receive_sms: null,
    receive_email: null,
  };

  ngOnInit(): void {
    this.getSettings();
  }

  changeSettings() {
    this.httpService
      .create(this.settings, "client/user_settings")
      .subscribe((res) => {
        if (res) {
          console.log(res);
          this._snackBar.open("تم الحفظ بنجاح", "إغلاق ", {
            duration: 4000,
          });
        }
      });
  }

  getSettings() {
    this.httpService.getAll("client/user_settings").subscribe((res) => {
      if (res) {
        this.settings.receive_email = res["data"][0].receive_email;
        this.settings.receive_sms = res["data"][0].receive_sms;
        console.log(this.settings);
      }
    });
  }
}
