import { Observable } from "rxjs";
export interface IDataManager {
  save(key: string, value: string): Observable<Object>;
  edit(key: string, value: string): Observable<Object>;
  delete(key: string);
  get(key: string);
}
