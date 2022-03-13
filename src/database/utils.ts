import { FilterDataType, ParamsListType } from "./types";

type Params = {
  id?: string;
  [key: string]: unknown;
};
export class FilterData<T extends Params> {
  private filterData: FilterDataType<T> = {
    data: [],
    total: 0,
  };

  constructor(data: T[]) {
    this.filterData.data = data;
    this.filterData.total = data.length;
  }

  getDataPage({ currentPage, countDataPerPage }: ParamsListType) {
    if (currentPage && countDataPerPage) {
      const right = currentPage * countDataPerPage - 1;
      const left = currentPage === 1 ? 0 : right - countDataPerPage + 1;
      this.filterData.data = [
        ...this.filterData.data.slice(
          left,
          right ? right + 1 : Math.max(right, 1)
        ),
      ];
    }

    return this;
  }

  getDataByIds({ ids }: ParamsListType) {
    const idList = ids?.split(",");

    if (idList?.length) {
      this.filterData.data = this.filterData.data.filter((dataItem) => {
        if (dataItem.id) {
          return idList.includes(dataItem.id);
        }

        return false;
      });
    }

    return this;
  }

  getData(): FilterDataType<T> {
    return this.filterData;
  }
}

export class DBData<T extends Params> {
  private data = [] as T[];

  constructor(data: T[]) {
    this.data = data;
  }

  getList(params: ParamsListType = {}) {
    return new FilterData<T>(this.data)
      .getDataByIds(params)
      .getDataPage(params)
      .getData();
  }
}
