import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { HttpService } from "src/app/shared/services/http.service";

@Component({
  selector: "app-project-delete",
  templateUrl: "./project-delete.component.html",
  styleUrls: ["./project-delete.component.scss"],
})
export class ProjectDeleteComponent implements OnInit {
  deletion_reason = "";
  isLoading: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<ProjectDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private httpService: HttpService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  deleteProject() {
    this.isLoading = true;
    const deletedProject = {
      deletion_reason: this.deletion_reason,
      projects_id: this.data.projects_id,
    };
    this.httpService
      .create(deletedProject, "real-estate-developer/project/destroy-request")
      .subscribe((res: any) => {
        if (res && res.success) {
          this.snackBar.open(
            "تم ارسال طلبك لحذف المشروع وسيتم تم حذفه بعد المراجعه",
            "إغلاق ",
            {
              duration: 4000,
            }
          );
          this.onNoClick();
        } else if (res && res.error) {
          this.snackBar.open(res.error, "إغلاق ", {
            duration: 4000,
          });
          this.isLoading = false;
        }
      });
  }
}
