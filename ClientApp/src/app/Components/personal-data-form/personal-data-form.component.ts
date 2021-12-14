import { IDataManager } from "./../../../Utilities/Interfaces/IDataManger";
import { CookiesManager } from "./../../../Utilities/CookiesManager";
import { CookieService } from "ngx-cookie-service";

import { FormManager } from "./../../../Utilities/FormManager";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-personal-data-form",
  templateUrl: "./personal-data-form.component.html",
  styleUrls: ["./personal-data-form.component.scss"],
})
export class PersonalDataFormComponent extends FormManager implements OnInit {
  constructor(builder: FormBuilder, cookie: CookieService) {
    super(cookie, new CookiesManager(cookie));

    this.form = builder.group({
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ["", [Validators.required]],
    });
  }

  ngOnInit() {}

  // submit() {
  //   // this.getData();
  //   // const fm = new FormManager();
  //   // console.log(this.form.value);
  //   // let keys = Object.keys(this.form.value);
  //   // let values = Object.values(this.form.value);

  //   // for (let i = 0; i < keys.length; i++) {
  //   //   console.log(keys[i] + " " + values[i]);
  //   // }
  //   // this.getValues();
  //   // console.log(this.form);
  //   // console.log(this.getData());
  // }

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
