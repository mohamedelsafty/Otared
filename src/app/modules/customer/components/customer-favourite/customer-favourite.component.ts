import { HttpService } from "./../../../../shared/services/http.service";
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-customer-favourite",
  templateUrl: "./customer-favourite.component.html",
  styleUrls: ["./customer-favourite.component.scss"],
})
export class CustomerFavouriteComponent implements OnInit {
  units;
  isLoading = false;
  @ViewChild("shareLink", { static: true }) shareElement: ElementRef;
  constructor(public httpService: HttpService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getFavourite();
  }

  getFavourite() {
    this.isLoading = true;
    this.httpService
      .create({}, "client/show-favorite-instances")
      .subscribe((res) => {
        if (res) {
          this.isLoading = false;
          this.units = res["data"];
          console.log(this.units);
        }
      });
  }

  share(instance) {
    this.shareElement.nativeElement.href =
      "whatsapp://send?text=" +
      instance.instance_name +
      "%0a" +
      environment.webUrl +
      "instance/" +
      instance.id;
    this.shareElement.nativeElement.click();
  }
  removeFavourite(id) {
    this.httpService
      .create({ instances_id: id }, "client/delete-instance-from-favorite")
      .subscribe(
        (res) => {
          if (res) {
            console.log(res);
            this.getFavourite();
          }
        },
        (error) => {
          if (error) {
            this.snackBar.open(error.error.error, "إغلاق ", {
              duration: 4000,
            });
          }
        }
      );
  }
}
