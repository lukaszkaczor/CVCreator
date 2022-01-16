export interface IDataFilter {
  match(input: any): boolean;
  run(input: any): any;
}
