import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Bank } from "../models/bank.model";
import { WorkCategory } from "../models/work-category.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WorkCategoriesService {
  isLoading: boolean = false;
  isUpdated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  workCategories: WorkCategory[] = [];
  constructor(private httpService: HttpService) {}
  public findAll() {
    if (!this.workCategories.length && !this.isLoading) {
      this.isLoading = true;
      this.httpService.getAll("Work-Categories").subscribe((res: any) => {
        this.workCategories = res.data;
        this.isLoading = false;
        this.isUpdated.next(true);
      });
    }
  }
  public findRecord(id: number) {
    let record = this.workCategories.find(
      (category: WorkCategory) => category.id == id
    );
    if (record) return record;
    else return new WorkCategory();
  }
  public findRecordByCode(code: string): WorkCategory {
    let record = this.workCategories.find(
      (category: WorkCategory) => category.code === code
    );
    if (record) return record;
    else return new WorkCategory();
  }
}
