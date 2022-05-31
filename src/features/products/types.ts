export enum ViewType {
  table = "table",
  grid = "grid",
}

type SpecificationsType = {
  [k: string]: unknown;
};

export type ProductType = {
  id: string;
  title: string | null;
  desc: string | null;
  categoryName: string | null;
  category: string | null;
  price: number | null;
  discountPrice: number | null;
  discountPercent: number | null;
  purchasePrice: number | null;
  imgUrl: string | null;
  specifications?: SpecificationsType;
};

export type ViewFieldsType<T> = { [K in keyof T]?: boolean };

export type ProductsSaveType = {
  ids: string[];
  products: ProductType[];
};

export type ProductsDataType = {
  products: ProductType[] | [];
  total: number;
};

export type SettingsFieldType = {
  label: string;
  name: string;
  checked: boolean;
};
