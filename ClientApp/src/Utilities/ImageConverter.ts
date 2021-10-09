import { IImageConverter } from "./Interfaces/IImageConverter";
export class ImageConverter implements IImageConverter {
  public Encode(file: Blob): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  public ImageIsNull(event) {
    return event.target.files.length < 1;
  }
}
