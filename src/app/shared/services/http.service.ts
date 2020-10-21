import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import config from "../../../config";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  // public baseUrl: string = "https://phase.bestsmsc.com/api/";
  public baseUrl: string = config.api;

  constructor(public http: HttpClient) {}

  getHeader() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      }),
    };
  }

  getAll(url) {
    return this.http
      .get(this.baseUrl + url, this.getHeader())
      .pipe(catchError(this.handlerError));
  }

  getById(id, url) {
    return this.http
      .get(this.baseUrl + url + "/" + id, this.getHeader())
      .pipe(catchError(this.handlerError));
  }

  create(resource, url, targetUrl:string = 'api') {
    return this.http
      .post(config[targetUrl] + url, resource, this.getHeader())
      .pipe(catchError(this.handlerError));
  }

  update(resource, url) {
    return this.http
      .put(this.baseUrl + url, resource, this.getHeader())
      .pipe(catchError(this.handlerError));
  }

  delete(id, url) {
    return this.http
      .delete(this.baseUrl + url + "/" + id, this.getHeader())
      .pipe(catchError(this.handlerError));
  }

  private handlerError(error: Response) {
    if (error.status === 400) {
      return throwError(error);
    }
    if (error.status === 404) {
      // console.log("Handling error locally and rethrowing it...", err);
      return throwError(error);
    }
    if (error.status === 401) {
      // console.log(error);
      // console.log(error["error"].error.id);
      return throwError(error);
    }
    return throwError(error);
  }
}
