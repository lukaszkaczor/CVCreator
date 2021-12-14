import { ApiManager } from "./../../../Utilities/ApiManager";
import { IDataManager } from "./../../../Utilities/Interfaces/IDataManger";
import { CookiesManager } from "./../../../Utilities/CookiesManager";
import { CookieService } from "ngx-cookie-service";

import { FormManager } from "./../../../Utilities/FormManager";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { PersonalDataService } from "src/app/Services/personal-data.service";

@Component({
  selector: "app-personal-data-form",
  templateUrl: "./personal-data-form.component.html",
  styleUrls: ["./personal-data-form.component.scss"],
})
export class PersonalDataFormComponent extends FormManager implements OnInit {
  constructor(
    builder: FormBuilder,
    cookie: CookieService,
    dataService: PersonalDataService
  ) {
    super(
      "personalData",
      new CookiesManager(cookie),
      new ApiManager(dataService)
    );

    this.form = builder.group({
      firstName: ["imie", [Validators.required, Validators.minLength(2)]],
      lastName: ["nazwisko", [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ["09-09-1992", [Validators.required]],
    });
  }

  ngOnInit() {}

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
