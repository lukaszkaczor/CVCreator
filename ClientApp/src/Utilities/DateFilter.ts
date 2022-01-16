import { IDataFilter } from "./Interfaces/IDataFilter";

export class DateFilter implements IDataFilter {
  match(data: string): boolean {
    const regexp = new RegExp("\\d+-\\d\\d-\\d\\dT\\d\\d:\\d\\d:\\d+");
    return regexp.test(data);
  }

  run(data: string): string {
    const regexp = new RegExp("T\\d\\d:\\d\\d:\\d+");
    return data.replace(regexp, "");
  }
}
