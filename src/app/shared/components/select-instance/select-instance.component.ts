import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ProjectsService } from "../../services/projects.service";
@Component({
  selector: "app-select-instance",
  templateUrl: "./select-instance.component.html",
  styleUrls: ["./select-instance.component.scss"]
})
export class SelectInstanceComponent implements OnInit {
  selectedUnitId: number = null;
  units: [] = [];
  instance: any = {};
  constructor(
    private projectsService: ProjectsService,
    public dialogRef: MatDialogRef<SelectInstanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    this.instance = this.data.instance;
    this.projectsService.getUnitsbyInstanceId(this.data.instance.id);
    this.projectsService.units.subscribe(value => {
      this.units = value;
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  select() {
    this.dialogRef.close(this.selectedUnitId);
  }
}
