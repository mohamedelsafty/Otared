import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ProjectFormComponent } from "./components/project-form/project-form.component";
import { ProjectDetailsComponent } from "./components/project-details/project-details.component";
import { ProjectInstanceComponent } from "./components/project-instance/project-instance.component";
import { ProjectInstanceDetailsComponent } from "./components/project-instance-details/project-instance-details.component";
import { InstanceFormComponent } from "./components/instance-form/instance-form.component";

const routes: Routes = [
  {
    path: "",
    component: ProjectsComponent,
  },
  {
    path: "project-form",
    component: ProjectFormComponent,
  },
  {
    path: "project-form/:id",
    component: ProjectFormComponent,
  },
  {
    path: ":id",
    component: ProjectDetailsComponent,
  },
  {
    path: ":id/instances",
    component: ProjectInstanceComponent,
  },
  {
    path: ":id/instances/:id",
    component: ProjectInstanceDetailsComponent,
  },
  {
    path: ":id/instance-form",
    component: InstanceFormComponent,
  },
  {
    path: ":id/instances/:id/update",
    component: InstanceFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
