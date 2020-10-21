import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material";

const ELEMENT_DATA = [
  {
    id: 8,
    type: "حجز",
    state: "تحت الاجراء",
    endDate: "16/03/2020",
    client: "فيصل محمد الغامدي",
    phone: "05021450000",
    action: "",
  },
  {
    id: 8,
    type: "حجز",
    state: "تحت الاجراء",
    endDate: "16/03/2020",
    client: "فيصل محمد الغامدي",
    phone: "05021450000",
    action: "",
  },
  {
    id: 8,
    type: "حجز",
    state: "تحت الاجراء",
    endDate: "16/03/2020",
    client: "فيصل محمد الغامدي",
    phone: "05021450000",
    action: "",
  },
];

@Component({
  selector: "app-support-unite-details-dialog",
  templateUrl: "./support-unite-details-dialog.component.html",
  styleUrls: ["./support-unite-details-dialog.component.scss"],
})
export class SupportUniteDetailsDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SupportUniteDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  displayedColumns: string[] = [
    "id",
    "type",
    "state",
    "endDate",
    "client",
    "phone",
    "action",
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  // changeStateDialog(): void {
  //   const dialogRef = this.dialog.open(SupportChangeStateDialogComponent, {
  //     width: "410px",
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {});
  // }
}
