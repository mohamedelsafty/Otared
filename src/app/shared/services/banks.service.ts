import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Bank } from "../models/bank.model";

@Injectable({
  providedIn: "root"
})
export class BanksService {
  isLoading: boolean = false;
  banks: Bank[] = [];
  constructor(private httpService: HttpService) {}
  public findAll() {
    if (!this.banks.length && !this.isLoading) {
      this.isLoading = true;
      this.httpService.getAll("Banks").subscribe((res: any) => {
        this.banks = res.data;
        this.isLoading = false;
      });
    }
  }
  public findRecord(id: number) {
    let record = this.banks.find((bank: Bank) => bank.id === id);
    if (record) return record;
    else return new Bank();
  }
}
