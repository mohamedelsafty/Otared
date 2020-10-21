import { Component, OnInit } from "@angular/core";
import { LinkMenu } from "src/app/shared/models/link-menu.model";
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: "app-developer-base",
  templateUrl: "./developer-base.component.html",
  styleUrls: ["./developer-base.component.css"],
})
export class DeveloperBaseComponent implements OnInit {
  active:boolean =  true;
  sideMenu: LinkMenu[] ;
  constructor(private auth:AuthService) {
    if(this.auth.getUser().account_status === 'accepted'){
      this.active = true;
    }
    else this.active = false;
    this.sideMenu = [
      {
        link: "/developer/dashboard",
        title: "الرئيسية",
        icon: "icon-home",
  
      },
      {
        link: "/developer/reservations",
        title: "طلبات الحجز",
        icon: "icon-calendar",
        disabled: !this.active
      },
      {
        link: "/developer/visits",
        title: "طلبات الزياره",
        icon: "icon-request",
        disabled: !this.active
      },
      {
        link: "/developer/projects",
        title: "المشاريع",
        icon: "icon-house",
        disabled: !this.active
      },
      {
        link: "/developer/notifications",
        title: "التنبيهات",
        icon: "icon-bell-outlined",
        disabled: !this.active
      },
      {
        link: "/developer/marketing",
        title: "التسويق",
        icon: "icon-report",
        disabled: !this.active
      },
      {
        link: "/developer/suggestions",
        title: "الاقتراحات",
        icon: "icon-suggestion",
        disabled: !this.active
      },
      {
        link: "/developer/settings",
        title: "الاعدادات",
        icon: "icon-cogwheel",
        disabled: !this.active
      },
      {
        link: "/developer/profile",
        title: "حسابي الشخصي",
        icon: "icon-user",
      },
    ];
  }

  ngOnInit() {}
}
