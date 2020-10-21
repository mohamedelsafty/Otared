import { Component, OnInit } from "@angular/core";
import { VisitRequestDialogComponent } from "src/app/modules/home/components/visit-request-dialog/visit-request-dialog.component";
import { MatDialog } from "@angular/material";
import { HttpService } from "src/app/shared/services/http.service";
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: "app-customer-finance-request",
  templateUrl: "./customer-finance-request.component.html",
  styleUrls: ["./customer-finance-request.component.scss"]
})
export class CustomerFinanceRequestComponent implements OnInit {
  browsingStatus: number = 0;
  demandObj: any = {};
  constructor(
    private dialog: MatDialog, 
    private http: HttpService,
    private customerService: CustomerService
    ) {}

  ngOnInit(): void {
    this.customerService.browsingStatus.subscribe(res => {
      this.browsingStatus = res;

      // demand request status
      if(this.browsingStatus === 5)
        this.getRequestStatus();
    });
  }
  showMessage() {
    const dialogRef = this.dialog.open(VisitRequestDialogComponent, {
      width: "410px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log("The dialog was closed");
    });
  }

  getRequestStatus(){
    this.http.getAll('client/Demand/current').subscribe((res:any) =>{
      this.demandObj = res.data;
    });
  }
}
