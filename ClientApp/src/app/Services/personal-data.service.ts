import { HttpClient, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Subscription } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PersonalDataService {
  constructor(
    private _http: HttpClient,
    @Inject("BASE_URL") private _baseUrl: string
  ) {}

  get() {
    return new Promise((resolve, rejects) => {
      this._http.get(this._baseUrl + "api/cv/5").subscribe((data) => {
        resolve(data);
      });
    });
  }

  post(endpoint: string, data: any) {
    const headers = { "content-type": "application/json" };

    data.ApplicationUserId = "1";

    return this._http.post(this._baseUrl + endpoint, JSON.stringify(data), {
      headers: headers,
    });
  }

  // post(endpoint: string, data: any) {
  //   const headers = { "content-type": "application/json" };

  //   return new Promise((resolve, rejects) => {
  //     // data.ApplicationUserId = "1";

  //     console.log(JSON.stringify(data));

  //     this._http
  //       .post(this._baseUrl + endpoint, JSON.stringify(data), {
  //         headers: headers,
  //       })
  //       .subscribe(
  //         (data) => resolve(data),
  //         (error) => resolve(error)
  //       );
  //   });

  // this.http
  //   .post("https://localhost:5001/api/address", JSON.stringify(ss), {
  //     headers: headers,
  //   })
  //   .subscribe((data) => {
  //     console.log(data);
  //   });
  // return new Promise((resolve, rejects) => {

  // });
  // }
}
