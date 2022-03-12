import { IImageConverter } from "./../../../Utilities/Interfaces/IImageConverter";
import { ImageConverter } from "./../../../Utilities/ImageConverter";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-image-form",
  templateUrl: "./image-form.component.html",
  styleUrls: ["./image-form.component.scss"],
})
export class ImageFormComponent implements OnInit {
  // @ViewChild("imageInput", { static: false }) imageFile: HTMLInputElement;
  @ViewChild("image", { static: false }) image: ElementRef;
  showDeleteButton = false;

  // imgData = null;
  private _converter: IImageConverter = new ImageConverter();
  public formTest: FormGroup;

  constructor(private cookies: CookieService, builder: FormBuilder) {
    this.formTest = builder.group({
      image: [],
    });
  }

  ngOnInit() {}

  //temp
  async onFileSelected(event) {
    if (this._converter.ImageIsNull(event)) {
      console.log("null");
      return 0;
    }

    let ss = await this._converter.Encode(event.target.files[0]);

    this.image.nativeElement.src = ss;
    console.log(ss);
    localStorage.setItem("img", ss);

    this.showDeleteButton = true;
  }

  async deleteImage() {
    this.formTest.reset();
    this.image.nativeElement.src = "../../../assets/profile_placeholder.jpg";
    this.showDeleteButton = false;
  }
}
