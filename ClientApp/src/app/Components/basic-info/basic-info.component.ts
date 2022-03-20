import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-basic-info",
  templateUrl: "./basic-info.component.html",
  styleUrls: ["./basic-info.component.scss"],
})
export class BasicInfoComponent implements OnInit {
  constructor(private http: HttpClient) {}
  list: any;

  ngOnInit() {
    this.http.get("https://localhost:5001/api/cv").subscribe((data) => {
      this.list = data;
      console.log(data);
    });
  }
}
