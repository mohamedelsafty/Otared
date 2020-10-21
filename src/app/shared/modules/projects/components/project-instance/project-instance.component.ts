import { ActivatedRoute } from "@angular/router";
import { HttpService } from "./../../../../services/http.service";
import { Component, OnInit } from "@angular/core";
import { InstanceService } from "../../services/instance.service";
import { Instance } from '../../models/instance.model';

@Component({
  selector: "app-project-instance",
  templateUrl: "./project-instance.component.html",
  styleUrls: ["./project-instance.component.scss"],
})
export class ProjectInstanceComponent implements OnInit {
  constructor(
    private instanceService: InstanceService,
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}
  instances: Instance[] = [];
  projectId: string = '';
  isLoading = true;

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params["id"];
    this.getInstance();
  }

  getInstance() {
    this.httpService
      .getById(this.projectId, "real-estate-developer/project/update-show")
      .subscribe((res) => {
        if (res) {
          this.isLoading = false;
          this.instances = res["success"][0].instances;
          console.log(this.instances);
        }
      });
  }
}
