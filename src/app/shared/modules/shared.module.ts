import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../components/header/header.component";
import { AuthHeaderComponent } from "../components/auth-header/auth-header.component";
import { LandingHeaderComponent } from "../components/landing-header/landing-header.component";
import {
  MatButtonModule,
  MatMenuModule,
  MatDialogModule,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { SampleCardComponent } from "../components/sample-card/sample-card.component";
import { ReservationDetailsComponent } from "../components/reservation-details/reservation-details.component";
import { DeveloperReservationRefusalComponent } from "../components/developer-reservation-refusal/developer-reservation-refusal.component";
import { DeveloperReservationAcceptanceComponent } from "../components/developer-reservation-acceptance/developer-reservation-acceptance.component";
import { BreadcrumbComponent } from "../components/breadcrumb/breadcrumb.component";
import { FormsModule } from "@angular/forms";
import { EmptyStateComponent } from "../components/empty-state/empty-state.component";
import { ConfirmDialogComponent } from "../components/confirm-dialog/confirm-dialog.component";
import { PaginationComponent } from "../components/pagination/pagination.component";
import { StepsComponent } from "../components/steps/steps.component";
import { InputCurrencyPipe } from "../pipes/input-currency.pipe";
import { MatPaginatorIntlCro } from "../providers/MatPaginatorIntlCro";
import { InstanceCardComponent } from "../components/instance-card/instance-card.component";
import { InstanceCardActionsComponent } from "../components/instance-card-actions/instance-card-actions.component";
import { InformationDialogComponent } from "../components/information-dialog/information-dialog.component";
import { SearchInstancesComponent } from "../components/search-instances/search-instances.component";
import { SelectInstanceComponent } from "../components/select-instance/select-instance.component";
import { CompareInstancesComponent } from "../components/compare-instances/compare-instances.component";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
    FormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    PaginationComponent,
    HeaderComponent,
    AuthHeaderComponent,
    LandingHeaderComponent,
    SidebarComponent,
    SampleCardComponent,
    ReservationDetailsComponent,
    DeveloperReservationRefusalComponent,
    DeveloperReservationAcceptanceComponent,
    BreadcrumbComponent,
    EmptyStateComponent,
    ConfirmDialogComponent,
    StepsComponent,
    InputCurrencyPipe,
    InstanceCardComponent,
    InstanceCardActionsComponent,
    InformationDialogComponent,
    SearchInstancesComponent,
    SelectInstanceComponent,
    CompareInstancesComponent
  ],
  exports: [
    PaginationComponent,
    HeaderComponent,
    AuthHeaderComponent,
    LandingHeaderComponent,
    SidebarComponent,
    ReservationDetailsComponent,
    SampleCardComponent,
    BreadcrumbComponent,
    DeveloperReservationRefusalComponent,
    DeveloperReservationAcceptanceComponent,
    EmptyStateComponent,
    StepsComponent,
    InputCurrencyPipe,
    InstanceCardComponent,
    InformationDialogComponent,
    SearchInstancesComponent,
    SelectInstanceComponent,
    CompareInstancesComponent
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro }],
  entryComponents: [
    DeveloperReservationRefusalComponent,
    DeveloperReservationAcceptanceComponent,
    ConfirmDialogComponent,
    SelectInstanceComponent,
    CompareInstancesComponent,
    InformationDialogComponent
  ]
})
export class SharedModule {}
