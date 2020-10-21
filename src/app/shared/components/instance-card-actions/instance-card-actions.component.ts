import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { MatDialog } from "@angular/material";
import { LoginDialogComponent } from "src/app/modules/home/components/login-dialog/login-dialog.component";
import { VisitRequestDialogComponent } from "src/app/modules/home/components/visit-request-dialog/visit-request-dialog.component";
import { CustomerService } from "../../services/customer.service";
import { HttpService } from "../../services/http.service";
import { InformationDialogComponent } from "../information-dialog/information-dialog.component";

@Component({
  selector: "instance-card-actions",
  templateUrl: "./instance-card-actions.component.html",
  styleUrls: ["./instance-card-actions.component.scss"]
})
export class InstanceCardActionsComponent implements OnInit {
  browsingStatus: number = 0;
  @Input() instance;
  constructor(
    public authService: AuthService,
    private dialog: MatDialog,
    private customerService: CustomerService,
    private httpService: HttpService
  ) {
    this.customerService.browsingStatus.subscribe(value => {
      this.browsingStatus = value;
    });
  }

  ngOnInit(): void {}
  visitRequest(instance) {
    if (!this.authService.isLoggedIn()) {
      const dialogRef = this.dialog.open(LoginDialogComponent, {
        width: "410px",
        data: {
          instance: instance
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        // console.log("The dialog was closed");
        this.visitRequestNumber(instance);
      });
    } else {
      this.visitRequestNumber(instance);
    }
  }
  selectInstance() {
    localStorage.setItem("instance", JSON.stringify(this.instance));
  }
  visitRequestNumber(instance): void {
    let data = {
      real_estate_developer_id: instance.developer_id,
      instances_id: instance.id,
      projects_id: instance.project_id
    };
    this.httpService.create(data, "client/new-visit-request").subscribe(
      (res: any) => {
        if (res) {
          const dialogRef = this.dialog.open(InformationDialogComponent, {
            width: "410px",
            data: {
              title: "طلب زيارة",
              desc:
                "تم ارسال طلب الزيارة  بنجاح إلي المطور العقاري وسيتم التواصل معك لاحقا لتحديد موعد الزيارة",
              sub: "رقم الطلب للمتابعة : " + res.data.id
            }
          });
        }
      },
      error => {
        {
          const dialogRef = this.dialog.open(InformationDialogComponent, {
            width: "410px",
            data: {
              title: "طلب زيارة",
              desc: error.error.error
            }
          });
        }
      }
    );

    console.log(instance);
  }
}
