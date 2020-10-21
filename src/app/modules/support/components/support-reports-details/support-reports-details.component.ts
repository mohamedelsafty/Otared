import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";

const ELEMENT_DATA = [
  {
    position: 1,
    name: "عملاء شهر فبراير",
    weight: "25-02-2020",
  },
  {
    position: 1,
    name: "مطوري شهر فبراير",
    weight: "26-02-2020",
    action: ""
  },
  {
    position: 1,
    name: "طلبات حجز شهر فبراير",
    weight: "27-02-2020",
    action: ""
  }
];
@Component({
  selector: 'app-support-reports-details',
  templateUrl: './support-reports-details.component.html',
  styleUrls: ['./support-reports-details.component.scss']
})
export class SupportReportsDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = [
    "position",
    "name",
    "weight",
    "action"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
