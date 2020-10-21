import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
const ELEMENT_DATA = [
  {
    position: 716,
    name: "محمد بن عبدالرحمن",
    weight: "أمجاد العقارية",
    symbol: "أمجاد الياسمين",
    unit: "تحت الاجراء",
    reservation: "تحت الاجراء"
  },
  {
    position: 716,
    name: "محمد بن عبدالرحمن",
    weight: "أمجاد العقارية",
    symbol: "أمجاد الياسمين",
    unit: "تحت الاجراء",
    reservation: "تحت الاجراء"
  },
  {
    position: 716,
    name: "محمد بن عبدالرحمن",
    weight: "أمجاد العقارية",
    symbol: "أمجاد الياسمين",
    unit: "تحت الاجراء",
    reservation: "تحت الاجراء"
  },
  {
    position: 716,
    name: "محمد بن عبدالرحمن",
    weight: "أمجاد العقارية",
    symbol: "أمجاد الياسمين",
    unit: "تحت الاجراء",
    reservation: "تحت الاجراء"
  }
];

const DELETED_PROJECTS = [
  {
    weight: "أمجاد العقارية",
    symbol: "أمجاد الياسمين"
  },
  {
    weight: "أمجاد العقارية",
    symbol: "أمجاد الياسمين"
  },
  {
    weight: "أمجاد العقارية",
    symbol: "أمجاد الياسمين"
  },
  {
    weight: "أمجاد العقارية",
    symbol: "أمجاد الياسمين"
  }
];

@Component({
  selector: "app-support-dashboard",
  templateUrl: "./support-dashboard.component.html",
  styleUrls: ["./support-dashboard.component.scss"]
})
export class SupportDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  displayedColumns: string[] = [
    "position",
    "name",
    "weight",
    "symbol",
    "unit",
    "action"
  ];

  deletedProjectsColumns: string[] = ["weight", "symbol", "action"];
  reservationsRequestData = new MatTableDataSource(ELEMENT_DATA);
  deletedProjectsData = new MatTableDataSource(DELETED_PROJECTS);
}
