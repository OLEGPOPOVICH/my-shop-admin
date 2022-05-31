export { actions as productsActions, ProductActionType } from "./actions";
export { productsReducer } from "./ducks";
export { Product } from "./components/Product";
export { ProductControl } from "./components/ProductControl";
export { ProductsTable } from "./components/ProductsTable";
export {
  ViewType,
  ProductType,
  ViewFieldsType,
  SettingsFieldType,
  ProductsSaveType,
} from "./types";
export { selectors as productsSelectors } from "./selectors";
