export interface IDataManager {
  save(key: string, value: string);
  edit(key: string, value: string);
  delete(key: string);
}
