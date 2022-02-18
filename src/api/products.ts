/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { products, settingsFieldsForProducts } from "@src/data";
import { ProductType, SettingsFieldType } from "@src/features/products/ducks";
import { delay } from "./api";
import { FilterData, FilterDataType } from "./utils";

export type ProductsAPIGet = {
  currentPage?: number;
  countDataPerPage?: number;
};

export const productsAPI = {
  getProducts: ({ currentPage, countDataPerPage }: ProductsAPIGet) => {
    const filterData = new FilterData(products)
      .getDataPage(currentPage, countDataPerPage)
      .getData();
    return delay<FilterDataType<ProductType>>(filterData, 500);
  },
  getSettingsFields: () => {
    const filterData = new FilterData(settingsFieldsForProducts).getData();

    return delay<FilterDataType<SettingsFieldType>>(filterData, 500);
  },
};
