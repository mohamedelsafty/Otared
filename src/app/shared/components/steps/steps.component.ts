import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LinkMenu } from "../../models/link-menu.model";
import { CalcFlowService } from "src/app/modules/calc/services/calc-flow.service";

@Component({
  selector: "steps",
  templateUrl: "./steps.component.html",
  styleUrls: ["./steps.component.scss"]
})
export class StepsComponent implements OnInit {
  openSide = false;
  paramID;
  @Input() menuList: LinkMenu[];
  @Input() steps;
  // linkList: LinkMenu[] = [];
  constructor(public route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.paramID = this.route.parent.snapshot.paramMap.get("id");
  }

  getSubRoutesActive(route) {
    const url = this.router.url;
    if (route.sub_routes && route.sub_routes.lenght) {
      route.sub_routes.map((subroute: any) => {
        if (url === subroute.link) return true;
      });
    }
    return false;
  }
  side() {
    this.openSide = !this.openSide;
  }
}
