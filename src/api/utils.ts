export type FilterDataType<T> = {
  data: T[] | [];
  total: number;
};

export class FilterData<T> {
  private filterData: FilterDataType<T> = {
    data: [],
    total: 0,
  };

  constructor(data: T[]) {
    this.filterData.data = data;
    this.filterData.total = data.length;
  }

  getDataPage(
    currentPage: number | undefined,
    countDataPerPage: number | undefined
  ) {
    if (currentPage && countDataPerPage) {
      const right = currentPage * countDataPerPage - 1;
      const left = currentPage === 1 ? 0 : right - countDataPerPage + 1;
      this.filterData.data = [
        ...this.filterData.data.slice(left, right ? right + 1 : right),
      ];
    }

    return this;
  }

  getData(): FilterDataType<T> {
    return this.filterData;
  }
}
