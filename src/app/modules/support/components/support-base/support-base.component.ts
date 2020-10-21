import { Component, OnInit } from "@angular/core";
import { LinkMenu } from "src/app/shared/models/link-menu.model";

@Component({
  selector: "app-support-base",
  templateUrl: "./support-base.component.html",
  styleUrls: ["./support-base.component.scss"],
})
export class SupportBaseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  sideMenu: LinkMenu[] = [
    {
      link: "/support/dashboard",
      title: "الرئيسية",
      icon: "icon-home",
    },
    {
      link: "/support/support-new-accounts",
      title: "حسابات جديدة",
      icon: "icon-calendar",
    },
    {
      link: "/support/support-manage-requests",
      title: "إدارة الطلبات",
      icon: "icon-request",
    },
    {
      link: "/support/projects",
      title: "الحجوزات",
      icon: "icon-house",
    },
    {
      link: "/support/support-property",
      title: "المطورين",
      icon: "icon-bell-outlined",
    },
    {
      link: "/support/support-client",
      title: "العملاء",
      icon: "icon-report",
    },
    {
      link: "/support/suggestions",
      title: "التقارير",
      icon: "icon-suggestion",
    },
    {
      link: "/support/dashboard",
      title: "الاقتراحات",
      icon: "icon-cogwheel",
    },
    {
      link: "/support/profile",
      title: "الاعدادات",
      icon: "icon-user",
    },
    {
      link: "/support/profile",
      title: "حسابي الشخصي",
      icon: "icon-user",
    },
  ];
}
