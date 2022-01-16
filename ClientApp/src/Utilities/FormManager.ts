import { IFormManagerOptions } from "./Interfaces/IFormManagerOptions";
import { IDataFilter } from "./Interfaces/IDataFilter";
import { IDataManager } from "./Interfaces/IDataManger";
import { FormGroup } from "@angular/forms";

export class FormManager {
  private formMarker: string;
  private _dataServices: IDataManager[];
  private _filters: IDataFilter[] = [];
  protected form: FormGroup;
  protected formIsSubmitted: boolean = false;
  public waitingForResponse = false;

  constructor(options: IFormManagerOptions) {
    this.formMarker = options.formMarker;
    this._dataServices = options.dataServices ? options.dataServices : [];
    this._filters = options.dataFilters ? options.dataFilters : [];
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

    this.form.setValue(this.prepareData(data));
  }

  prepareData(data) {
    let obj = {};
    const keys = Object.keys(this.form.value);

    keys.forEach((key) => {
      let value = data[key];

      this._filters.forEach((filter) => {
        if (filter.match(value)) value = filter.run(value);
      });

      obj[key] = value ? value : "";
    });

    console.log(obj);
    // this.form.setValue(obj);

    return obj;
  }

  protected runDataServices(data): Promise<boolean> {
    return new Promise((resolve, rejects) => {
      for (let i = 0; i < this._dataServices.length; i++) {
        const service = this._dataServices[i];

        service.save(this.formMarker, data).then((data) => {
          console.log(data);

          if (this.isLastLoopIteration(i)) resolve(true);
        });
      }
    });
  }

  private isLastLoopIteration(index: number) {
    return index == this._dataServices.length - 1;
  }

  private getDataFromForm() {
    return JSON.stringify(this.form.value);
  }

  protected formIsValid(): boolean {
    return this.form.valid;
  }
}
