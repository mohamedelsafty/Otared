import { ActivatedRoute } from "@angular/router";
import { HttpService } from "src/app/shared/services/http.service";
import { Component, OnInit } from "@angular/core";
import { InstanceService } from "../../services/instance.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.component.html",
  styleUrls: ["./project-details.component.scss"],
})
export class ProjectDetailsComponent implements OnInit {
  projectId: number;
  projects;
  instances;
  isLoading = true;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private instanceService: InstanceService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params["id"];
    this.getProject();
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
  getProject() {
    this.httpService
      .getById(this.projectId, "real-estate-developer/project/update-show")
      .subscribe((res) => {
        if (res) {
          this.isLoading = false;
          this.projects = res["success"];
          this.instances = res["success"][0].instances;
          this.instanceService.instancesArr = res["success"][0].instances;
          console.log(this.projects);
          console.log(this.instanceService.instancesArr);
        }
      });
  }
}
