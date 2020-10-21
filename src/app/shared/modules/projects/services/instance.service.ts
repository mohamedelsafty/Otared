import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InstanceService {
  instances = new BehaviorSubject("sd");
  instancesArr;

  constructor() {}
}
