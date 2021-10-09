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

  // imgData = null;
  private _converter: IImageConverter = new ImageConverter();
  public formTest: FormGroup;

  constructor(private cookies: CookieService, builder: FormBuilder) {
    this.formTest = builder.group({
      image: [],
    });
  }

  ngOnInit() {}

  async onFileSelected(event) {
    if (this._converter.ImageIsNull(event)) {
      console.log("null");
      return 0;
    }

    this.image.nativeElement.src = await this._converter.Encode(
      event.target.files[0]
    );
  }

  deleteImage() {
    this.image.nativeElement.src = "../../../assets/profile_placeholder.jpg";
    this.formTest.reset();
  }
}
