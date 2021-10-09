import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  isActive: boolean = true;

  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.isActive = !this.isActive;
  }
}
