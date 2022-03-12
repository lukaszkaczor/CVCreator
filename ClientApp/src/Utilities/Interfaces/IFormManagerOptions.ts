import { IDataFilter } from "./IDataFilter";
import { IDataManager } from "./IDataManger";

export interface IFormManagerOptions {
  formMarker: string;
  dataServices?: IDataManager[];
  dataFilters?: IDataFilter[];

  dataService: IDataManager;
}
