import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { InstanceAdvantage } from "../models/instance-advantage.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  projects: BehaviorSubject<any> = new BehaviorSubject([]);
  instances: BehaviorSubject<any> = new BehaviorSubject([]);
  units: BehaviorSubject<any> = new BehaviorSubject([]);
  instance: BehaviorSubject<any> = new BehaviorSubject({});
  instanceLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private httpService: HttpService) {}
  search(key: string) {
    if (key && key.length >= 3) {
      this.isLoading.next(true);
      this.httpService
        .getAll("Utility/Project/autocomplete?q=" + key)
        .subscribe((res: any) => {
          if (res) {
            this.projects.next(res.data);
            this.isLoading.next(false);
          }
        });
    }
  }
  getInstanceById(id: number) {
    if (id) {
      this.instanceLoading.next(true);
      this.httpService
        .getAll("Utility/Instance/" + id + "?counter=0")
        .subscribe((res: any) => {
          this.instanceLoading.next(false);
          this.instance.next(res.data);
        });
    }
  }
  getInstancesbyPorjectId(id: number) {
    if (id) {
      this.httpService
        .getAll("Utility/Instance?project_id=" + id)
        .subscribe((res: any) => {
          this.instances.next(res.data);
        });
    }
  }
  getUnitsbyInstanceId(id: number) {
    if (id) {
      this.httpService
        .getAll("Utility/Instance/" + id + "/units")
        .subscribe((res: any) => {
          this.units.next(res.data);
        });
    }
  }
}
