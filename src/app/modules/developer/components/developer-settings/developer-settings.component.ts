import { HttpService } from "src/app/shared/services/http.service";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-developer-settings",
  templateUrl: "./developer-settings.component.html",
  styleUrls: ["./developer-settings.component.scss"],
})
export class DeveloperSettingsComponent implements OnInit {
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
      .create(this.settings, "real-estate-developer/user_settings")
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
    this.httpService
      .getAll("real-estate-developer/user_settings")
      .subscribe((res) => {
        if (res) {
          this.settings.receive_email = res["data"][0].receive_email;
          this.settings.receive_sms = res["data"][0].receive_sms;
          console.log(this.settings);
        }
      });
  }
}
