export type FilterDataType<T> = {
  data: T[] | [];
  total: number;
};

export type ParamsListType = {
  ids?: string;
  currentPage?: number;
  countDataPerPage?: number;
};
