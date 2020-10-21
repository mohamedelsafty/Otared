import { Component, OnInit } from "@angular/core";
import { LinkMenu } from "src/app/shared/models/link-menu.model";
import { PurchasingflowService } from "../../services/purchasing-flow.service";

@Component({
  selector: "app-purchasing-base",
  templateUrl: "./purchasing-base.component.html",
  styleUrls: ["./purchasing-base.component.scss"]
})
export class PurchasingBaseComponent implements OnInit {
  openSide = false;
  sideMenu: LinkMenu[] = [
    {
      link: "/purchasing/is-real-estate",
      title: "هل عندك عقار",
      sub_routes: []
    },
    {
      link: "/purchasing/functional-info",
      title: "المعلومات المالية",
      sub_routes: [
        {
          link: "/purchasing/monthly-fees"
        }
      ]
    },
    {
      link: "/purchasing/solidarity",
      title: "الدعم والتضامن",
      sub_routes: []
    },
    {
      link: "/purchasing/offers",
      title: "اختر البرنامج المناسب",
      sub_routes: []
    }
  ];
  constructor(public purchasingflowService: PurchasingflowService) {}

  ngOnInit(): void {}
  side() {
    this.openSide = !this.openSide;
  }
}
