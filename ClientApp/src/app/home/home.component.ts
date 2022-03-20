import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");

    if (token) return true;
    else return false;
  }

  logout() {
    localStorage.removeItem("jwt");
  }
}
