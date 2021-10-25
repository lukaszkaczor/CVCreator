import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.scss"],
})
export class WorkExperienceComponent implements OnInit {
  showForm = true;

  form: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      jobTitle: [""],
      companyName: [""],
      location: [""],
      startDate: [""],
      endDate: [""],
      stillWorking: [""],
    });
  }

  ngOnInit() {}

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
