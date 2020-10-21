import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { MatDialog, MatSnackBar } from "@angular/material";
import { LoginDialogComponent } from "src/app/modules/home/components/login-dialog/login-dialog.component";
import { VisitRequestDialogComponent } from "src/app/modules/home/components/visit-request-dialog/visit-request-dialog.component";
import { AuthService } from "../../services/auth.service";
import { HttpService } from "../../services/http.service";
import { environment } from "src/environments/environment";
import { PurchasingDataService } from "src/app/modules/purchasing/services/purchasing-data.service";
import { SelectInstanceComponent } from "../select-instance/select-instance.component";
import { PropertyInfo } from "src/app/modules/purchasing/models/purchasing.model";

@Component({
  selector: "instance-card",
  templateUrl: "./instance-card.component.html",
  styleUrls: ["./instance-card.component.scss"]
})
export class InstanceCardComponent implements OnInit {
  @Input() instance;
  @Input() filterDesign;
  @Input() withoutActions: boolean;
  @Input() withSelectOption: boolean;
  @Input() selectOptionTarget: string;
  @ViewChild("shareLink", { static: true }) shareElement: ElementRef;
  isSelected: boolean = false;
  constructor(
    private httpService: HttpService,
    private dialog: MatDialog,
    public authService: AuthService,
    private snackBar: MatSnackBar,
    private purchasingDataService: PurchasingDataService
  ) {}

  ngOnInit(): void {
    this.purchasingDataService.instanceIdSelected.subscribe(res => {
      if (res && res == this.instance.id) this.isSelected = true;
      else this.isSelected = false;
    });
  }
  onSelect() {
    if (this.selectOptionTarget == "selectInstance") {
      const dialogRef = this.dialog.open(SelectInstanceComponent, {
        width: "410px",
        data: {
          instance: this.instance
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.purchasingDataService.setUnit(
            result,
            this.instance.id,
            this.instance.project_id
          );
        }
      });
    }
  }
  onUnSelect() {
    if (this.selectOptionTarget == "selectInstance") {
      this.purchasingDataService.clearUnit();
    }
  }
  addToFavoritRequest() {
    if (!this.authService.isLoggedIn()) {
      const dialogRef = this.dialog.open(LoginDialogComponent, {
        width: "410px",
        data: {
          message: "يجب الدخول أولاً إلى الموقع للتمكن من إضافة العقار للمفضلة"
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        // console.log("The dialog was closed");
        if (result) this.addToFavorit();
      });
    } else {
      this.addToFavorit();
    }
  }
  share() {
    this.shareElement.nativeElement.href =
      "whatsapp://send?text=" +
      this.instance.instance_name +
      "%0a" +
      environment.webUrl +
      "instance/" +
      this.instance.id;
    this.shareElement.nativeElement.click();
  }
  addToFavorit() {
    if (
      this.authService.isLoggedIn() &&
      this.authService.getUser().type === "Client"
    ) {
      this.httpService
        .create(
          { instances_id: this.instance.id },
          "client/add-instance-to-favorite"
        )
        .subscribe(res => {
          if (res) {
            this.instance.is_favorite = true;
            this.snackBar.open("تم الاضافة الى المفضلة بنجاح", "إغلاق ", {
              duration: 4000
            });
          }
        });
    } else {
      this.snackBar.open("عفوا ,لايمكنك اضافه الى المفضلة", "إغلاق ", {
        duration: 4000
      });
    }
  }
  removeFromFavorte() {
    if (
      this.authService.isLoggedIn() &&
      this.authService.getUser().type === "Client"
    ) {
      this.httpService
        .create(
          { instances_id: this.instance.id },
          "client/delete-instance-from-favorite"
        )
        .subscribe(res => {
          if (res) {
            this.instance.is_favorite = false;
            this.snackBar.open("تم الحذف الى المفضلة بنجاح", "إغلاق ", {
              duration: 4000
            });
          }
        });
    } else {
      this.snackBar.open("عفوا ,لايمكنك الحذف الى المفضلة", "إغلاق ", {
        duration: 4000
      });
    }
  }
}
