import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DeveloperUser } from "src/app/shared/models/user.model";
import { Project } from "src/app/shared/modules/projects/models/project.model";
import { AuthService } from "src/app/shared/services/auth.service";
import { HttpService } from "src/app/shared/services/http.service";
import { environment } from "src/environments/environment";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-dev-marketing",
  templateUrl: "./dev-marketing.component.html",
  styleUrls: ["./dev-marketing.component.scss"],
})
export class DevMarketingComponent implements OnInit {
  developer: DeveloperUser = new DeveloperUser();
  projects: Project[] = [];
  isLoading: boolean = true;
  constructor(
    private httpService: HttpService,
    private snackBar: MatSnackBar
  ) {}
  urlConfig = {
    developerUrl: environment.webUrl + "shared-developer/",
    projectUrl: environment.webUrl + "shared-project/",
    instanceUrl: environment.webUrl + "shared-instance/",
  };
  @ViewChild("shareLink", { static: true }) shareElement: ElementRef;
  ngOnInit(): void {
    this.getProjectes();
    this.getDeveloper();
  }
  getDeveloper() {
    this.isLoading = true;
    this.httpService
      .getAll("real-estate-developer/personal-info")
      .subscribe((res) => {
        if (res) {
          this.isLoading = false;
          this.developer = res["success"];
        }
      });
  }
  copy(target: string, id: number) {
    const selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = this.urlConfig[target] + id;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
    this.snackBar.open("تم نسخ الرابط", "إغلاق ", {
      duration: 4000,
    });
  }
  share(target: string, id: number, name: string) {
    this.shareElement.nativeElement.href =
      "whatsapp://send?text=" + name + "%0a" + this.urlConfig[target] + id;
    this.shareElement.nativeElement.click();
  }
  getProjectes() {
    this.isLoading = true;
    this.httpService
      .getAll("real-estate-developer/project")
      .subscribe((res) => {
        if (res) {
          this.isLoading = false;
          this.projects = res["success"].data;
        }
      });
  }
}
