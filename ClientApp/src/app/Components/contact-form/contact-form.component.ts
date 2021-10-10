import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      email: [""],
      phoneNumber: ["", Validators.required],
    });
  }

  ngOnInit() {}

  get email() {
    return this.form.get("email");
  }
  set email(val) {
    this.email.setValue(val);
  }

  get phoneNumber() {
    return this.form.get("phoneNumber");
  }
  set phoneNumber(val) {
    this.phoneNumber.setValue(val);
  }
}
