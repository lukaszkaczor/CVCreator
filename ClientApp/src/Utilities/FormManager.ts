import { IDataManager } from "./Interfaces/IDataManger";
import { FormGroup } from "@angular/forms";

export class FormManager {
  private formMarker: string;
  private dataServices: IDataManager[];
  protected form: FormGroup;
  protected formIsSubmitted: boolean = false;
  public waiting = true;

  // list of services
  constructor(formMarker: string, ...dataServices: IDataManager[]) {
    this.formMarker = formMarker;
    this.dataServices = dataServices;
  }

  public async submit() {
    if (this.formIsValid()) {
      this.waiting = false;

      this.runDataServices(this.getData()).then((response: boolean) => {
        this.waiting = response;
        console.log(response);
      });

      // submit
    } else {
      // stop
    }
  }

  //DATA TO JSON
  protected runDataServices(data): Promise<boolean> {
    return new Promise((resolve, rejects) => {
      for (let i = 0; i < this.dataServices.length; i++) {
        const service = this.dataServices[i];

        service.save(this.formMarker, data).then((data) => {
          console.log(data);

          if (i == this.dataServices.length - 1) resolve(true);
        });
      }
    });
  }

  getData() {
    return JSON.stringify(this.form.value);
  }

  protected formIsValid(): boolean {
    return this.form.valid;
  }
}
