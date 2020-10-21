import { Instance } from "./../../models/instance.model";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "src/app/shared/services/http.service";
import { Component, OnInit } from "@angular/core";
import { Advantage } from "../../models/advantage.model";

@Component({
  selector: "app-instance-form",
  templateUrl: "./instance-form.component.html",
  styleUrls: ["./instance-form.component.scss"],
})
export class InstanceFormComponent implements OnInit {
  selectedFile: File = null;
  instance: Instance = new Instance();
  Properties;
  instanceId;
  estate_type: string;
  projectId;
  minDate = new Date();
  project;
  fileName: string = null;
  loopNum: any = [];
  realUnitsNumber: any = [];
  resError: any = {};
  isLoading;
  advantages: Advantage[];
  properties;
  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPropertyType();
    this.getAdvantages();
    for (let index = 1; index < 11; index++) {
      this.loopNum.push(index);
    }

    if (this.route.snapshot.routeConfig.path == ":id/instances/:id/update") {
      this.projectId = this.route.snapshot.url[0].path;
      this.instanceId = this.route.snapshot.params["id"];
      this.getInstance();
      this.getProject();
    } else {
      this.projectId = this.route.snapshot.params["id"];
      // console.log(this.projectId);
      this.getProject();
    }
  }

  onNumOfUnitChange() {
    if (this.instance.numberofunits) {
      this.realUnitsNumber = [];

      for (let index = 0; index < this.instance.numberofunits; index++) {
        this.realUnitsNumber.push(index);
      }
    } else {
      this.realUnitsNumber = [];
    }
  }
  getAdvantages() {
    this.httpService
      .getAll("real-estate-developer/show-all-advantages")
      .subscribe((res: any) => {
        if (res) {
          this.advantages = res.data;
        }
      });
  }
  onFileChanged(files) {
    let file = files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.instance.instances_images_paths = reader.result;
    };
    this.fileName = files.item(0).name;
  }

  getProperties() {
    this.httpService.getAll("get-all-property-type").subscribe((res) => {
      if (res) {
        this.Properties = res["success"];
        console.log(res);
      }
    });
  }

  getProject() {
    this.httpService
      .getById(this.projectId, "real-estate-developer/project/update-show")
      .subscribe((res) => {
        if (res) {
          this.project = res["success"][0];
          // console.log(this.project);
        }
      });
  }

  getInstance() {
    this.httpService
      .create(
        { instance_id: this.instanceId },
        "real-estate-developer/project/get-instance"
      )
      .subscribe((res) => {
        if (res) {
          this.instance = res["success"]["instance"];
          // console.log(this.instance);
        }
      });
  }

  updateInstance() {
    this.advantages.map((ad) => {
      if (ad.isSelected) this.instance.instances_advantage_array.push(ad.id);
    });
    this.isLoading = true;
    this.httpService
      .create(
        this.instance,
        "real-estate-developer/project/get-instance/update"
      )
      .subscribe(
        (res) => {
          if (res) {
            // console.log(res);
            this.isLoading = false;
            this.router.navigate([
              "/developer/projects/" + this.projectId + "/instances",
            ]);
          }
        },
        (error) => {
          if (error) {
            this.isLoading = false;
            this.resError = error.error.error;
            console.log(error.error.error);
          }
        }
      );
  }

  addNewProject() {
    this.isLoading = true;
    this.instance.project_type = this.project.project_type;
    this.instance.projects_id = this.project.id;
    this.advantages.map((ad) => {
      if (ad.isSelected) this.instance.instances_advantage_array.push(ad.id);
    });
    this.httpService
      .create(this.instance, "real-estate-developer/project/instance")
      .subscribe(
        (res) => {
          if (res) {
            this.isLoading = false;
            this.router.navigate([
              "/developer/projects/" + this.projectId + "/instances",
            ]);
            console.log(res);
          }
        },
        (error) => {
          if (error) {
            this.isLoading = false;

            this.resError = error.error.error;
            console.log(error.error.error);
          }
        }
      );
  }

  getPropertyType() {
    this.httpService.getAll("get-all-property-type").subscribe((res) => {
      if (res) {
        this.properties = res["success"];
        console.log(res);
      }
    });
  }
}
