import { IKeyValue } from "./Interfaces/IKeyValue";
import { IDataManager } from "./Interfaces/IDataManger";
import { CookieService } from "ngx-cookie-service";
import { FormGroup } from "@angular/forms";
import { JsonFormatter } from "tslint/lib/formatters";

export class FormManager {
  private dataServices: IDataManager[];
  protected form: FormGroup;
  protected formIsSubmitted: boolean = false;

  // list of services
  constructor(private cookies: CookieService, ...dataServices: IDataManager[]) {
    this.dataServices = dataServices;
    console.log(dataServices[0]);
  }

  public async submit() {
    let value = this.form.value;
    console.log(JSON.stringify(value));
    let jsn = JSON.stringify(value);
    console.log(JSON.parse(jsn));
    // const data = this.getData();
    // console.log(JSON.parse(this.form.value));
    if (this.formIsValid()) {
      //save data as cookies
      // this.runDataServices(data);
      // submit
    } else {
      // stop
    }
  }

  //DATA TO JSON
  protected async runDataServices(data: IKeyValue[]) {
    this.dataServices.forEach(async (service) => {
      await service.save("key", "value");
      console.log("finish");
    });
  }

  protected formIsValid(): boolean {
    return this.form.valid;
  }

  getData(): IKeyValue[] {
    let dataList: IKeyValue[] = [];
    const keys = Object.keys(this.form.value);
    const values = Object.values(this.form.value);

    if (keys.length != values.length) {
      alert("FormManager.ts > getData(); keys.lenght != values.length");
      return dataList;
    }

    for (let index = 0; index < keys.length; index++) {
      this.cookies.set(keys[index], values[index] as string);
      dataList.push({ key: keys[index], value: values[index] });
    }

    return dataList;
  }
}
