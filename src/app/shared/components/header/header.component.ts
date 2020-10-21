import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "main-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  @Input() isFixed:boolean;
  constructor() {

  }

  ngOnInit() {
  }
}
