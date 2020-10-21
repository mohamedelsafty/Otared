import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { SupportClientBlockComponent } from './../../components/support-client-block/support-client-block.component';
import { SupportClientDeleteComponent } from './../../components/support-client-delete/support-client-delete.component';

const ELEMENT_DATA = [
  {
    position: 716,
    name: "طلب حجز",
    weight: "امجاد الياسمين",
    symbol: "تحت الاجراء",
    unit: "06/03/2020",
  },
  {
    position: 716,
    name: "طلب حجز",
    weight: "امجاد الياسمين",
    symbol: "تحت الاجراء",
    unit: "06/03/2020",
    action: ""
  },
  {
    position: 716,
    name: "طلب حجز",
    weight: "امجاد الياسمين",
    symbol: "تحت الاجراء",
    unit: "06/03/2020",
    action: ""
  },
  {
    position: 716,
    name: "طلب حجز",
    weight: "امجاد الياسمين",
    symbol: "تحت الاجراء",
    unit: "06/03/2020",
    action: ""
  }
];

@Component({
  selector: 'app-support-client-details',
  templateUrl: './support-client-details.component.html',
  styleUrls: ['./support-client-details.component.scss']
})
export class SupportClientDetailsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }
  deleteDialog(): void {
    const dialogRef = this.dialog.open(
      SupportClientDeleteComponent,
      {
        width: "380px",
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  blockDialog(): void {
    const dialogRef = this.dialog.open(SupportClientBlockComponent, {
      width: "380px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }


  displayedColumns: string[] = [
    "position",
    "name",
    "weight",
    "symbol",
    "unit",
    "action"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
