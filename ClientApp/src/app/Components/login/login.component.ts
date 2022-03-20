import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = false;
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {}

  login(form: NgForm) {
    const creditentials = {
      username: form.value.username,
      password: form.value.password,
    };

    this.http
      .post("https://localhost:5001/api/auth/login", creditentials)
      .subscribe(
        (response) => {
          const token = (<any>response).token;
          localStorage.setItem("jwt", token);
          console.log(token);
          this.invalidLogin = false;
          this.router.navigate(["/"]);
        },
        (err) => {
          this.invalidLogin = true;
        }
      );
  }
}
