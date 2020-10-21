import { HttpService } from "./../../../shared/services/http.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthApiService {
  constructor(public httpService: HttpService) {}

  getAllCities() {
    return this.httpService.getAll("get-all-cities");
  }

  postRegister(data) {
    return this.httpService.create(data, "developer-register");
  }
  postLogin(data) {
    return this.httpService.create(data, "developer-login");
  }
}
