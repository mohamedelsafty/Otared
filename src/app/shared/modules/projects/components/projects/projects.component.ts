import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/shared/services/http.service";
import { ProjectDeleteComponent } from "../project-delete/project-delete.component";
import { MatDialog, MatSnackBar } from "@angular/material";
import { Project } from "../../models/project.model";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  projects: [];
  isLoading = true;
  project: Project = new Project();
  lastPage;
  pagination = [];

  constructor(
    private httpService: HttpService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.httpService
      .getAll("real-estate-developer/project")
      .subscribe((res) => {
        if (res) {
          this.isLoading = false;
          this.projects = res["success"].data;
          this.lastPage = res["success"].last_page;
          if (this.lastPage) {
            for (let index = 0; index < this.lastPage; index++) {
              this.pagination.push(index);
            }
          }
        }
      });
  }

  deleteProject(id): void {
    const dialogRef = this.dialog.open(ProjectDeleteComponent, {
      width: "410px",
      data: { projects_id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log("The dialog was closed");
    });
  }

  editProject(project: Project) {
    this.httpService
      .create(project, `real-estate-developer/project/update/${project["id"]}`)
      .subscribe((res) => {
        if (res) {
        }
      });
  }

  paginateData(page?) {
    this.httpService
      .getAll(`real-estate-developer/project?page=${page}`)
      .subscribe((res) => {
        if (res) {
          this.projects = res["success"].data;
        }
      });
  }

  activeProject(e, project) {
    const data = {
      project_id: project.id,
      is_disabled: !e.checked,
    };
    this.httpService
      .create(data, "real-estate-developer/disable-project")
      .subscribe((res: any) => {
        if (res) {
          this.snackBar.open(res.success, "إغلاق ", {
            duration: 4000,
          });
        }
      });
  }
}
