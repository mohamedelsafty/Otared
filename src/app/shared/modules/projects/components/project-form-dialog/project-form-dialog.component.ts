import { Component, OnInit, Inject } from "@angular/core";
import { MouseEvent } from "@agm/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-project-form-dialog",
  templateUrl: "./project-form-dialog.component.html",
  styleUrls: ["./project-form-dialog.component.scss"],
})
export class ProjectFormDialogComponent implements OnInit {
  lat: number = 24.713552;
  lng: number = 46.675297;
  markerLat: number;
  markerLng: number;
  constructor(
    public dialogRef: MatDialogRef<ProjectFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    this.lat =  this.data.latitude || 24.713552;
    this.lng = this.data.longitude || 46.675297;
    this.markerLat = this.data.latitude || null;
    this.markerLng = this.data.longitude || null;

  }

  onNoClick(): void {
    this.data.longitude = this.lng;
    this.data.latitude = this.lat;
    this.dialogRef.close({ lat: this.markerLat, lng: this.markerLng });
  }


  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markerLat = $event.coords.lat;
    this.markerLng = $event.coords.lng;
    this.dialogRef.close({ lat: this.markerLat, lng: this.markerLng });
  }
}
