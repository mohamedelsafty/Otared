import { HttpService } from "./../../../../shared/services/http.service";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-visit-request-dialog",
  templateUrl: "./visit-request-dialog.component.html",
  styleUrls: ["./visit-request-dialog.component.scss"],
})
export class VisitRequestDialogComponent implements OnInit {
  dialogTitle = "عفوا";
  dialogDesc =
    "لا يمكنك الآن رفع طلب تمويل ، حتى يتم الانتهاء من ربط المنصة مع منظومة عطارد للحسبة";
  instance;
  resultData;
  constructor(
    public dialogRef: MatDialogRef<VisitRequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.instance = this.data.instance;
    console.log(this.data);
    console.log(this.instance);
    this.getvisitRequestNumber();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getvisitRequestNumber() {
    let data = {
      real_estate_developer_id: this.instance.developer_id,
      projects_id: this.instance.project_id,
      instances_id: this.instance.id,
    };
    this.httpService
      .create(data, "client/new-visit-request")
      .subscribe((res) => {
        if (res) {
          console.log(res);
          this.resultData = res["data"];
          console.log(this.resultData);
        }
      });
  }
}
