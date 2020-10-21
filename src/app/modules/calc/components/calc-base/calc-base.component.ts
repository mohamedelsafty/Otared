import { Component, OnInit } from "@angular/core";
import { LinkMenu } from "src/app/shared/models/link-menu.model";
import { CalcDataService } from "../../services/calc-data.service";
import { CalcFlowService } from "../../services/calc-flow.service";

@Component({
  selector: "app-calc-base",
  templateUrl: "./calc-base.component.html",
  styleUrls: ["./calc-base.component.scss"],
})
export class CalcBaseComponent implements OnInit {
  sideMenu: LinkMenu[] = [
    {
      link: "/calc/personal-information",
      title: "المعلومات المالية",
    },
    {
      link: "/calc/support-information",
      title: "بيانات الدعم",
    },
    {
      link: "/calc/available-offers",
      title: "العروض التمويلية المتاحة",
    },
  ];
  constructor(
    private calcData: CalcDataService,
    public calcFlowService: CalcFlowService
  ) {}

  ngOnInit(): void {}
}
