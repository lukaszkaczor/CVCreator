import { Observable } from "rxjs";
import { PersonalDataService } from "./../app/Services/personal-data.service";
import { IDataManager } from "./Interfaces/IDataManger";

export class ApiManager implements IDataManager {
  constructor(private api: PersonalDataService) {}
  get(key: string) {
    return this.api.get();
  }

  save(key: string, value: any): Observable<Object> {
    return this.api.post(key, value);
  }

  edit(key: string, value: string): Observable<Object> {
    return this.api.post(key, value);

    // return new Promise((resolve, reject) => {
    //   resolve(true);
    // });
  }

  delete(key: string) {
    throw new Error("Method not implemented.");
  }
}
