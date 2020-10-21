import { Injectable } from "@angular/core";
import { HttpService } from "src/app/shared/services/http.service";
import { Visit, FundingInfo } from "../models/visit.model";
import { DataResponse } from "src/app/shared/models/data-response.model";
import { MatDialog, MatSnackBar } from "@angular/material";
import { ConfirmDialogComponent } from "src/app/shared/components/confirm-dialog/confirm-dialog.component";
import { AuthService } from "src/app/shared/services/auth.service";

@Injectable({
  providedIn: "root"
})
export class VisitsService {
  isLoading: boolean = false;
  isSaving: boolean = false;
  visits: Visit[] = [];
  visit: Visit = new Visit();
  total: number = 1;
  perPage: number = 15;
  page: number = 1;
  targetFilter: string = null;
  isSearch: boolean = false;
  fundingInfo: FundingInfo = new FundingInfo();
  userApi: string;
  filterVisibility = true;

  constructor(
    private httpService: HttpService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private auth: AuthService
  ) {}
  // 1- get all
  public findAll(page?: number) {
    let url = "real-estate-developer/all-visit-request";
    if (this.auth.getUser().type === "Client") {
      url = "client/visit-request";
      this.filterVisibility = false;
    }
    if (page && page > 1) url += "?page=" + page;
    this.isLoading = true;
    return this.httpService.getAll(url).subscribe((res: DataResponse) => {
      if (res) {
        if (res.success && res.success.data) this.visits = res.success.data;
        else if (res.data) this.visits = res.data;
        else this.visits = [];
        this.isLoading = false;
        this.setPagination(res);
      }
    });
  }
  //2- set filter
  public setFilter(targetFilter) {
    this.targetFilter = targetFilter;
  }

  //3- get data filterd
  public filter(): Visit[] {
    if (this.targetFilter) {
      let targetFilterCapitalized =
        this.targetFilter.charAt(0).toUpperCase() + this.targetFilter.slice(1);
      return this.visits.filter(
        (visit: Visit) =>
          visit.visit_status === this.targetFilter ||
          visit.visit_status === targetFilterCapitalized
      );
    } else return this.visits.slice();
  }

  //4- get visit with id
  public findRecord(id) {
    this.isLoading = true;
    let url = "real-estate-developer/visit-request?visit_request_id=" + id;
    if (this.auth.getUser().type === "Client")
      url = "client/visit-request/" + id;
    this.httpService.getAll(url).subscribe((res: any) => {
      if (res.success && res.success.visit_request) {
        this.visit = res.success.visit_request[0];
        this.fundingInfo = res.success.visit_request["funding_info"];
      } else if (res.data) this.visit = res.data;
      this.isLoading = false;
    });
  }

  //5- search
  public search(key?: string) {
    if (key) {
      this.doSearch(key);
    } else {
      this.findAll();
    }
  }

  //6- Do search
  private doSearch(key: string) {
    this.isLoading = true;
    let url = "real-estate-developer/search-in-visit-request";
    if (this.auth.getUser().type === "Client") {
      url = "client/search-in-visit-request";
    }
    this.httpService.create({ query_value: key }, url).subscribe((res: any) => {
      if (res && res.success.data) {
        this.visits = res.success.data;
        this.setPagination(res);
      } else if (res && res.data.data) {
        this.visits = res.data.data;
        this.setPagination(res);
      } else {
        this.visits = [];
      }
      this.isLoading = false;
    });
  }

  // userType() {
  //   let currentUser = this.auth.getUser();
  //   if (currentUser.type === "RealEstateDeveloper") {
  //     this.userApi = "real-estate-developer/new-suggestion";
  //   } else if (currentUser.type === "Client") {
  //     this.userApi = "client/new-suggestion";
  //   }
  // }

  //7- change Status
  public changeStatus(id: number, status: string) {
    if (status === "accepted") {
      this.doChangeStatus(id, status);
    } else if (status === "canceled") {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: "410px",
        data: {
          message: "هل انت متأكد من رفض الزياره ؟"
        }
      });

      dialogRef.afterClosed().subscribe(confirm => {
        if (confirm) this.doChangeStatus(id, status);
      });
    }
  }

  //8- Do change Status
  private doChangeStatus(id: number, status: string) {
    this.isSaving = true;
    this.httpService
      .create(
        { visit_request_id: id, visit_status: status },
        "real-estate-developer/visit-request-status-update"
      )
      .subscribe((res: any) => {
        if (res) {
          this.isSaving = false;
          if (status === "accepted") {
            this.snackBar.open("تم التواصل والموافقة بنجاح", "إغلاق ", {
              duration: 4000
            });
          } else if (status === "canceled") {
            this.snackBar.open("تم رفض الزيارة بنجاح", "إغلاق ", {
              duration: 4000
            });
          }
        }
        this.setVisitStatus(res.success);
      });
  }

  //9- set change Status after update
  private setVisitStatus(targetVisit: Visit) {
    let currentVisit = this.visits.find((v: Visit) => v.id === targetVisit.id);
    if (currentVisit) {
      currentVisit.visit_status = targetVisit.visit_status;
    }
    if (this.visit.id) {
      this.visit.visit_status = targetVisit.visit_status;
    }
  }
  public destroy(id) {
    this.isSaving = true;
    this.httpService
      .create({ visit_request_id: id }, "client/destroy-visit-request")
      .subscribe(res => {
        if (res) {
          this.isSaving = false;
          this.snackBar.open("تم حذف طلب الزيارة بنجاح", "إغلاق ", {
            duration: 4000
          });
          this.findAll();
        }
      });
  }
  //9-set Pagination **need to move to utility service**
  private setPagination(res: DataResponse) {
    if (res.success) {
      this.page = res.success.current_page;
      this.total = res.success.total;
      this.perPage = res.success.per_page;
    } else if (res.meta) {
      this.page = res.meta.current_page;
      this.total = res.meta.total;
      this.perPage = res.meta.per_page;
    }
  }
}
