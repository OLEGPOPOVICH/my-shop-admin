import { products, settingsFields } from "./data/products/products";
import { ParamsListType } from "./types";
import { DBData } from "./utils";

export const productsDB = {
  getProducts: (params: ParamsListType) => new DBData(products).getList(params),
  getSettingsFields: () => new DBData(settingsFields).getList(),
};
