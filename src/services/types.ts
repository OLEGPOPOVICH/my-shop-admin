type MetaType = {
  status: number;
  statusText: string;
  desc: string | null;
};

export type ResponseMetaType = {
  meta: MetaType;
};

export type ResponseTypeList<T> = {
  data: T[] | [];
  total: number;
  meta: MetaType;
};

export type ResponseType<T> = {
  data: T;
  meta: MetaType;
};
