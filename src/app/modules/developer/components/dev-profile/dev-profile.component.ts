import { MatDialog, MatSnackBar } from "@angular/material";
import { Component, OnInit } from "@angular/core";
import { DevProfileDialogComponent } from "../dev-profile-dialog/dev-profile-dialog.component";
import { HttpService } from "src/app/shared/services/http.service";
import { DeveloperUser } from "src/app/shared/models/user.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-dev-profile",
  templateUrl: "./dev-profile.component.html",
  styleUrls: ["./dev-profile.component.scss"],
})
export class DevProfileComponent implements OnInit {
  selectedFile: File;
  fileName: string = null;
  isLoading: boolean = false;
  developerUser: DeveloperUser;
  developerUserIsComplete: boolean = false;
  isEdit: boolean = false;
  loading: boolean = true;
  constructor(
    public dialog: MatDialog,
    private httpService: HttpService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
  ngOnInit() {
    this.getData();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DevProfileDialogComponent, {
      width: "320px",
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  onFileChanged(files) {
    let file = files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.developerUser.logo_path = reader.result;
    };
    this.fileName = files.item(0).name;
  }

  getData() {
    this.httpService
      .getAll("real-estate-developer/complete-registration")
      .subscribe((res: any) => {
        this.developerUser = res.success;
        this.developerUserIsComplete = res.success.is_pass_complete_profile;
      });
  }
  pass(withoutRoute?: boolean) {
    this.isLoading = true;
    this.httpService
      .create({}, "real-estate-developer/pass-complete-profile")
      .subscribe(
        (res) => {
          if (withoutRoute) {
            this.openDialog();
          } else this.router.navigate(["/developer/dashboard"]);
        },
        (error) => {
          this.snackBar.open(error.error.message, "إغلاق ", {
            duration: 4000,
          });
          this.isLoading = false;
        }
      );
  }
  saveData() {
    this.isLoading = true;
    let data = {
      personal_name: this.developerUser.personal_name,
      email_address: this.developerUser.email_address,
      head_office_address: this.developerUser.head_office_address || undefined,
      description: this.developerUser.description || undefined,
      website: this.developerUser.website || undefined,
      logo_path: this.developerUser.logo_path,
    };
    this.httpService
      .create(data, "real-estate-developer/complete-registration")
      .subscribe(
        (res) => {
          if (res) {
            this.isLoading = false;
            if (!this.developerUserIsComplete) {
              this.pass(true);
            } else {
              this.isEdit = false;
              this.snackBar.open("تم الحفظ بنجاح", "إغلاق ", {
                duration: 4000,
              });
            }
          }
        },
        (error) => {
          this.isLoading = false;
          this.snackBar.open("عفوا, حدث خطأ في الحفظ", "إغلاق ", {
            duration: 4000,
          });
        }
      );
  }
}
