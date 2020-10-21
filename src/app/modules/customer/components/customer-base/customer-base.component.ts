import { Component, OnInit } from "@angular/core";
import { LinkMenu } from "src/app/shared/models/link-menu.model";

@Component({
  selector: "app-customer-base",
  templateUrl: "./customer-base.component.html",
  styleUrls: ["./customer-base.component.scss"],
})
export class CustomerBaseComponent implements OnInit {
  sideMenu: LinkMenu[] = [
    {
      link: "/customer/finance/request",
      title: "طلب التمويل",
      icon: "icon-home",
    },
    {
      link: "/customer/visits",
      title: "طلبات الزيارة",
      icon: "icon-calendar",
    },
    {
      link: "/customer/favourite",
      title: "العقارات المفضلة",
      icon: "icon-calendar",
    },
    {
      link: "/customer/finance/calc",
      title: "الحاسبة التمويلية",
      icon: "icon-calendar",
    },
    // {
    //   link: "/customer/notifications",
    //   title: "التنبيهات",
    //   icon: "icon-house",
    // },
    {
      link: "/customer/suggestions",
      title: "الاقتراحات",
      icon: "icon-house",
    },
    {
      link: "/customer/settings",
      title: "الاعدادات",
      icon: "icon-report",
    },
    {
      link: "/customer/profile",
      title: "حسابي الشخصي",
      icon: "icon-suggestion",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
