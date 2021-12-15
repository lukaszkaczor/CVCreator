export interface IDataManager {
  save(key: string, value: string): Promise<any>;
  edit(key: string, value: string): Promise<any>;
  delete(key: string);
  get(key: string);
}
