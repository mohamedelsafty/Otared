import { Component, OnInit } from "@angular/core";
import { VisitRequestDialogComponent } from "../visit-request-dialog/visit-request-dialog.component";
import { MatDialog } from "@angular/material";
import {
  LandingHeaderConfig,
  LandingHeaderService
} from "../../services/landing-header.service";
import { AuthService } from "src/app/shared/services/auth.service";
import { CustomerService } from "src/app/shared/services/customer.service";
import { HttpService } from 'src/app/shared/services/http.service';
@Component({
  selector: "app-land-page",
  templateUrl: "./land-page.component.html",
  styleUrls: ["./land-page.component.scss"]
})
export class LandPageComponent implements OnInit {
  browsingStatus: number = 0;
  demandObj: any = {};
  constructor(
    private dialog: MatDialog,
    private landingHeaderService: LandingHeaderService,
    private httpService: HttpService,
    private customerService: CustomerService,
    public authService: AuthService
  ) {}
  showMessage() {
    const dialogRef = this.dialog.open(VisitRequestDialogComponent, {
      width: "410px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log("The dialog was closed");
    });
  }
  ngOnInit(): void {
    
    
    this.customerService.browsingStatus.subscribe(res => {
      this.browsingStatus = res;

      // demand request status
      if(this.authService.isLoggedIn() && this.browsingStatus === 5)
        this.getRequestStatus();
    });
    
    // tabs component
    const tabs = document.querySelectorAll(".tabs__list-item > a");
    [].forEach.call(tabs, tab => {
      tab.addEventListener("click", event => {
        event.preventDefault();
        let _target = tab.getAttribute("data-target");

        const linkElems = document.querySelectorAll(".tabs__list-item > a");
        [].forEach.call(linkElems, el => el.classList.remove("is-active"));
        tab.classList.add("is-active");

        const tabsElems = document.querySelectorAll(".tabs__content");
        [].forEach.call(tabsElems, el => el.classList.remove("is-active"));
        document
          .querySelector(`.tabs__content[id=${_target}]`)
          .classList.add("is-active");
      });
    });
  }
  ngAfterViewInit(): void {
    // adjust header style
    let headerConfig: LandingHeaderConfig = {
      theme: "dark",
      position: "relative"
    };
    this.landingHeaderService.set(headerConfig);
  }
  
  getRequestStatus(){
    this.httpService.getAll('client/Demand/current').subscribe((res:any) =>{
      this.demandObj = res.data;
    });
  }

}
