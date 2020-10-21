import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "../../../../services/http.service";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ProjectFormDialogComponent } from "../project-form-dialog/project-form-dialog.component";
import { Project } from "../../models/project.model";
import * as moment from "moment";
@Component({
  selector: "app-project-form",
  templateUrl: "./project-form.component.html",
  styleUrls: ["./project-form.component.scss"],
})
export class ProjectFormComponent implements OnInit {
  logoFileName:string;
  projectFilesName: string;
  schemeFileName: string;
  cities;
  districts;
  projectId;
  projects;
  minDate = new Date();
  islicense = true;
  isLoading;
  resError;
  isDistrictLoading: boolean = false;
  project: Project = new Project();
  isError: boolean =  false;

  constructor(
    public dialog: MatDialog,
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.params["id"];
    this.getCity();
    if (this.projectId) {
      this.getProject();
    }

    if (this.project.neighborhoods_id) {
      this.getDistrict();
    }
  }

  openMapDialog(): void {
    const dialogRef = this.dialog.open(ProjectFormDialogComponent, {
      width: "400px",
      data: {
        longitude: this.project.longitude,
        latitude: this.project.latitude,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.project.longitude = result.lng;
      this.project.latitude = result.lat;
    });
  }

  onFileChanged(event, nameProperty:string, property:string, isMulti?:boolean) {
    let fileList = event.target.files;
    for (let index = 0; index < fileList.length; index++) {
      const file = fileList[index];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if(isMulti){
          this.project[property].push(reader.result);
          this[nameProperty] = fileList.length + ' صور';
        }else{
          this[nameProperty] = file.name;
          this.project[property] = reader.result;
        }
        
      };
    }
  }


  getCity() {
    this.httpService.getAll("get-all-cities").subscribe((res) => {
      if (res) {
        this.cities = res["success"];
        // console.log(res["success"]);
        // this.getDistrict();
      }
    });
  }
  goRoute(){
    // if(this.projectId)
    //   this.router.navigate(['/developer/projects/project-form/'], this.projectId)
    // else
    this.router.navigate(['/developer/projects'])
   
  }
  getendMinDate(date){
  
  return moment(date).add(1,'days').format()
  }
  getDistrict() {
    this.isDistrictLoading = true;
    this.httpService
      .getAll(`get-neighborhoods-by-city?city_id=${this.project.city_id}`)
      .subscribe((res) => {
        if (res) {
          this.isDistrictLoading = false;
          this.districts = res["success"];
          // console.log(res["success"]);
        }
      });
  }

  getProject() {
    this.httpService
      .getById(this.projectId, "real-estate-developer/project/update-show")
      .subscribe((res) => {
        if (res) {
          this.project = new Project(res["success"][0]);
          this.project.logo_path = null;
          this.project.scheme_image_path = null;
          this.project.project_images_paths = [];
          this.getDistrict();
          console.log(this.project);
        }
      });
  }

  creatProject(form) {
    // const fd = new FormData();
    // fd.append("image", this.selectedFile.name);
    // console.log(fd);
    if(form.valid && this.project.latitude && this.project.longitude){
      this.isLoading = true;
      this.isError = false;
      this.httpService
        .create(this.project, "real-estate-developer/project")
        .subscribe(
          (res) => {
            if (res) {
              this.isLoading = false;
              this.goRoute();
            }
          },
          (error) => {
            if (error.status === 422) {
              this.isLoading = false;
              this.resError = error.error.error;
              console.log(error.error.error);
            }
          }
        );
    }
    else {
      this.isError = true;
    }
   
  }

  editProject() {
    let data = new Project(this.project);
    data.ends_date = moment(data.ends_date).format("YYYY-MM-DD")
    data.starts_date = moment(data.starts_date).format("YYYY-MM-DD")
    data.sale_on_map_license_expire_date = moment(data.sale_on_map_license_expire_date).format("YYYY-MM-DD")
    this.isLoading = true;
    this.httpService
      .create(
        data,
        `real-estate-developer/project/update/${this.projectId}`
      )
      .subscribe(
        (res) => {
          if (res) {
            this.isLoading = false;
            this.goRoute();
          }
        },
        (error) => {
          if (error.status === 422) {
            this.isLoading = false;
            this.resError = error.error.error;
            console.log(error.error.error);
          }
        }
      );
  }
}
