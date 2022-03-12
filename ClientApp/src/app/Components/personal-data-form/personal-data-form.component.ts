import { DateFilter } from "./../../../Utilities/DateFilter";
import { ApiManager } from "./../../../Utilities/ApiManager";
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
    // cookie: CookieService,
    private dataService: PersonalDataService
  ) {
    super({
      formMarker: "api/cv",
      // formMarker: "personalData",
      dataService: new ApiManager(dataService),
      // dataServices: [new ApiManager(dataService)],
      // dataServices: [new CookiesManager(cookie), new ApiManager(dataService)],
      dataFilters: [new DateFilter()],
    });

    this.form = builder.group({
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ["", [Validators.required]],
    });
  }

  ngOnInit() {
    this.loadForm(new ApiManager(this.dataService));
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
