import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PersonalDataService {
  constructor(private http: HttpClient) {}

  getService() {
    return new Promise((resolve, rejects) => {
      this.http.get("https://localhost:5001/api/cv/2").subscribe((data) => {
        resolve(data);
      });
    });
  }
}
