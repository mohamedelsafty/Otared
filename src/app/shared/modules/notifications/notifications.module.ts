import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NotificationsRoutingModule } from "./notifications-routing.module";
import { NotificationsListComponent } from "./components/notifications-list/notifications-list.component";
import { SharedModule } from "../shared.module";
import { MatProgressSpinnerModule } from "@angular/material";

@NgModule({
  declarations: [NotificationsListComponent],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
})
export class NotificationsModule {}
