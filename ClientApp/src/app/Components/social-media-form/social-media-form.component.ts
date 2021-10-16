import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-social-media-form",
  templateUrl: "./social-media-form.component.html",
  styleUrls: ["./social-media-form.component.scss"],
})
export class SocialMediaFormComponent implements OnInit {
  form: FormGroup;
  constructor(builder: FormBuilder) {
    this.form = builder.group({
      socialMedia: ["", Validators.required],
      link: ["", Validators.required],
    });
  }

  ngOnInit() {}

  get socialMedia() {
    return this.form.get("socialMedia");
  }
  set socialMedia(val) {
    this.socialMedia.setValue(val);
  }

  get link() {
    return this.form.get("link");
  }
  set link(val) {
    this.link.setValue(val);
  }
}
