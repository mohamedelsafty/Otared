import { Component, OnInit, Input } from "@angular/core";
import { LinkMenu } from "../../models/link-menu.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  openSide = false;
  paramID;
  @Input() menuList: LinkMenu[];
  linkList: LinkMenu[] = [];
  constructor(public route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.linkList = this.menuList;
    this.paramID = this.route.parent.snapshot.paramMap.get("id");
  }

  side() {
    this.openSide = !this.openSide;
  }
}
