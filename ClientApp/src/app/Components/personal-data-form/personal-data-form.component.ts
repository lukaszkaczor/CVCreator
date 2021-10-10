import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-personal-data-form",
  templateUrl: "./personal-data-form.component.html",
  styleUrls: ["./personal-data-form.component.scss"],
})
export class PersonalDataFormComponent implements OnInit {
  form: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ["", [Validators.required]],
    });
  }

  ngOnInit() {}

  submit() {
    console.log(this.form);
  }

  get firstName() {
    return this.form.get("firstName");
  }
  set firstName(val) {
    this.firstName.setValue(val);
  }

  get lastName() {
    return this.form.get("lastName");
  }
  set lastName(val) {
    this.lastName.setValue(val);
  }

  get dateOfBirth() {
    return this.form.get("dateOfBirth");
  }
  set dateOfBirth(val) {
    this.dateOfBirth.setValue(val);
  }
}
