import { IDataManager } from "./Interfaces/IDataManger";
import { FormGroup } from "@angular/forms";

export class FormManager {
  private formMarker: string;
  private dataServices: IDataManager[];
  protected form: FormGroup;
  protected formIsSubmitted: boolean = false;
  public waitingForResponse = false;

  constructor(formMarker: string, ...dataServices: IDataManager[]) {
    this.formMarker = formMarker;
    this.dataServices = dataServices;
  }

  public async submit() {
    this.formIsSubmitted = true;

    if (!this.formIsValid()) {
      console.log("Form is invalid.");
      return 0;
    }

    this.waitingForResponse = true;

    this.runDataServices(this.getDataFromForm()).then((response: boolean) => {
      this.waitingForResponse = false;
      console.log(response);
    });
  }

  //temp
  public async loadForm(dataManager: IDataManager) {
    const data = await dataManager.get(this.formMarker);

    console.log(data);

    // const obj = JSON.parse(data);

    this.prepareData(data);
    // this.form.setValue(data);

    // const cookiesManager: IDataManager = this.dataServices[0];
    // let cookie = await cookiesManager.get(this.formMarker);
    // console.log(cookie);
    // let obj = JSON.parse(cookie);
    // console.log(obj);
    // this.form.setValue(obj);
  }

  prepareData(data) {
    let obj = {};
    const keys = Object.keys(this.form.value);

    // filter
    // \d+-\d\d-\d\dT\d\d:\d\d:\d\d

    keys.forEach((key) => {
      obj[key] = data[key] ? data[key] : "";
    });

    console.log(obj);
    this.form.setValue(obj);
  }

  protected runDataServices(data): Promise<boolean> {
    return new Promise((resolve, rejects) => {
      for (let i = 0; i < this.dataServices.length; i++) {
        const service = this.dataServices[i];

        service.save(this.formMarker, data).then((data) => {
          console.log(data);

          if (this.isLastLoopIteration(i)) resolve(true);
        });
      }
    });
  }

  private isLastLoopIteration(index: number) {
    return index == this.dataServices.length - 1;
  }

  private getDataFromForm() {
    return JSON.stringify(this.form.value);
  }

  protected formIsValid(): boolean {
    return this.form.valid;
  }
}
