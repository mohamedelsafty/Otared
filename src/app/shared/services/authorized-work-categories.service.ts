import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Bank } from "../models/bank.model";

@Injectable({
  providedIn: "root"
})
export class AuthorizedWorkCategories {
  isLoading: boolean = false;
  workCategories: Bank[] = [];
  constructor(private httpService: HttpService) {}
  public findAll() {
    if (!this.workCategories.length && !this.isLoading) {
      this.isLoading = true;
      this.httpService.getAll("Banks").subscribe((res: any) => {
        this.workCategories = res.data;
        this.isLoading = false;
      });
    }
  }
  public findRecord(id: number) {
    let record = this.workCategories.find(
      (category: Bank) => category.id === id
    );
    if (record) return record;
    else return new Bank();
  }
}
