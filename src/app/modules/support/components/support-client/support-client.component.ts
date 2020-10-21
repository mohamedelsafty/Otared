import { SupportClientBlockComponent } from './../../components/support-client-block/support-client-block.component';
import { SupportClientDeleteComponent } from './../../components/support-client-delete/support-client-delete.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material";
const ELEMENT_DATA = [
  {
    position: 1,
    name: "فيصل محمد الغامدي",
    weight: "05021679451",
    symbol: "مفعل",
    unit: "طلب حجز",
  },
  {
    position: 2,
    name: "محمد بن عبدالله",
    weight: "05021679451",
    symbol: "مفعل",
    unit: "طلب زياره",
    action: ""
  },
  {
    position: 3,
    name: "فيصل محمد الغامدي",
    weight: "05021679451",
    symbol: "غير مفعل",
    unit: "طلب تمويل",
    action: ""
  },
  {
    position: 4,
    name: "محمد بن عبدالله",
    weight: "05021679451",
    symbol: "محظور",
    unit: "طلب زياره",
    action: ""
  },
  {
    position: 5,
    name: "محمد بن عبدالله",
    weight: "05021679451",
    symbol: "غير مفعل",
    unit: "طلب حجز",
    action: ""
  },
  {
    position: 6,
    name: "فيصل محمد الغامدي",
    weight: "05021679451",
    symbol: "مفعل",
    unit: "طلب تمويل",
    action: ""
  },
  {
    position: 7,
    name: "فهد بن محمد العتيبي",
    weight: "05021679451",
    symbol: "محظور",
    unit: "طلب حجز",
    action: ""
  },
  {
    position: 8,
    name: "حسن صلاح حسن",
    weight: "05021679451",
    symbol: "مفعل",
    unit: "طلب زياره",
    action: ""
  },
  {
    position: 9,
    name: "حسن صلاح حسن",
    weight: "05021679451",
    symbol: "غير مفعل",
    unit: "طلب حجز",
    action: ""
  },
  {
    position: 10,
    name: "فهد بن محمد العتيبي",
    weight: "05021679451",
    symbol: "محظور",
    unit: "طلب تمويل",
    action: ""
  }
];
@Component({
  selector: 'app-support-client',
  templateUrl: './support-client.component.html',
  styleUrls: ['./support-client.component.scss']
})
export class SupportClientComponent implements OnInit {

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
