import { PersonalDataService } from "./../app/Services/personal-data.service";
import { IDataManager } from "./Interfaces/IDataManger";
export class ApiManager implements IDataManager {
  constructor(private api: PersonalDataService) {}

  async save(key: string, value: string) {
    console.log("testapi");
    return this.api.getService();
  }
  edit(key: string, value: string) {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
  delete(key: string) {
    throw new Error("Method not implemented.");
  }
}
