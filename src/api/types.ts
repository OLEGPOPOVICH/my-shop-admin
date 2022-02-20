type MetaType = {
  status: number;
  statusText: string;
  desc: string | null;
};

export type ResponseTypeList<T> = {
  data: T[];
  total: number;
  meta: MetaType;
};

export type ResponseTypeItem<T> = {
  data: T;
  meta: MetaType;
};
