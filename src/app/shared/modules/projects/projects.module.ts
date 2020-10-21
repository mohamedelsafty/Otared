import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ProjectDetailsComponent } from "./components/project-details/project-details.component";
import { ProjectFormComponent } from "./components/project-form/project-form.component";
import {
  MatSidenavModule,
  MatTableModule,
  MatDatepickerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
} from "@angular/material";
import { AgmCoreModule } from "@agm/core";
import { ProjectFormDialogComponent } from "./components/project-form-dialog/project-form-dialog.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProjectDeleteComponent } from "./components/project-delete/project-delete.component";
import { ProjectInstanceComponent } from "./components/project-instance/project-instance.component";
import { ProjectInstanceDetailsComponent } from "./components/project-instance-details/project-instance-details.component";
import { InstanceService } from "./services/instance.service";
import { SwiperModule } from "ngx-swiper-wrapper";
import { SWIPER_CONFIG } from "ngx-swiper-wrapper";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { InstanceChangeStateDialogComponent } from "./components/instance-change-state-dialog/instance-change-state-dialog.component";
import { InstanceFormComponent } from "./components/instance-form/instance-form.component";
import { SharedModule } from '../shared.module';
import { ShareWithClinetDialogComponent } from './components/share-with-clinet-dialog/share-with-clinet-dialog.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: "horizontal",
  slidesPerView: "auto",
};

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectDetailsComponent,
    ProjectFormComponent,
    ProjectFormDialogComponent,
    ProjectDeleteComponent,
    ProjectInstanceComponent,
    ProjectInstanceDetailsComponent,
    InstanceChangeStateDialogComponent,
    InstanceFormComponent,
    ShareWithClinetDialogComponent,
  ],
  imports: [
    MatTooltipModule,
    SharedModule,
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatCheckboxModule,
    SwiperModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCuaq7NJkSDoz9ORGZzVopdHK6X-m8F6qs",
      libraries: ["places"],
    }),
  ],
  entryComponents: [
    ProjectFormDialogComponent,
    ProjectDeleteComponent,
    InstanceChangeStateDialogComponent,
    ShareWithClinetDialogComponent
  ],
  providers: [
    InstanceService,
    InstanceFormComponent,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class ProjectsModule {}
