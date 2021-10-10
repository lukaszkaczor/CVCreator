import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-creator-navigation",
  templateUrl: "./creator-navigation.component.html",
  styleUrls: ["./creator-navigation.component.scss"],
})
export class CreatorNavigationComponent implements OnInit {
  @Input() nextPage: string = null;
  @Input() prevPage: string = null;

  constructor() {}

  ngOnInit() {}
}
