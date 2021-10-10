import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.scss"],
})
export class AddressFormComponent implements OnInit {
  form: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      address: ["", Validators.required],
    });
  }

  ngOnInit() {}

  get address() {
    return this.form.get("address");
  }
  set address(val) {
    this.address.setValue(val);
  }
}
