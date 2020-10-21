import { Component, OnInit } from "@angular/core";
import { VisitsService } from "../../services/visits.service";
import { ActivatedRoute } from "@angular/router";
import { PropertyTypeService } from "src/app/shared/services/property-type.service";

@Component({
  selector: "app-visit-details",
  templateUrl: "./visit-details.component.html",
  styleUrls: ["./visit-details.component.scss"],
})
export class VisitDetailsComponent implements OnInit {
  visitID: string = null;

  constructor(
    public visitsService: VisitsService,
    public propertyTypeService: PropertyTypeService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      this.visitID = paramMap.get("id");
      if (this.visitID) this.visitsService.findRecord(this.visitID);
    });
  }
}
