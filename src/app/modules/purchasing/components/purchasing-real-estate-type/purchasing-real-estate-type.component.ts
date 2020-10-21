import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-purchasing-real-estate-type",
  templateUrl: "./purchasing-real-estate-type.component.html",
  styleUrls: ["./purchasing-real-estate-type.component.scss"],
})
export class PurchasingRealEstateTypeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToNext() {
    this.router.navigate([""]);
  }
}
