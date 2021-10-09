export interface IImageConverter {
  Encode(file: any): Promise<any>;
  ImageIsNull(event): boolean;
}
