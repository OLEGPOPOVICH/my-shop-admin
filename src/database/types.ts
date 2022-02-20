export type FilterDataType<T> = {
  data: T[] | [];
  total: number;
};

export type ParamsListType = {
  currentPage?: number | undefined;
  countDataPerPage?: number | undefined;
};
