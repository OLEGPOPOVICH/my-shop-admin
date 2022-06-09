import { RootReducerType } from "@store";
import { ProductsDataType, ProductType, SettingsFieldType } from "./types";

/**
 * ## [Селектор] Получить данные списка продуктов
 *
 * @returns {ProductsDataType} Данные списка продуктов
 */
const getProductsData =
  () =>
  (state: RootReducerType): ProductsDataType =>
    state.productsReducer.productsData;

/**
 * ## [Селектор] Получить данные списка продуктов для редактирования
 *
 * @returns {ProductsDataType} Данные списка продуктов для редактирования
 */
const getProductsDataForEdit =
  () =>
  (state: RootReducerType): ProductsDataType =>
    state.productsReducer.productsDataForEdit;

/**
 * ## [Селектор] Получить список продуктов
 *
 * @returns {ProductType[]} Список продуктов
 */
const getProducts =
  () =>
  (state: RootReducerType): ProductType[] =>
    state.productsReducer.productsData.products;

/**
 * ## [Селектор] Получить количество продуктов
 *
 * @returns {number} Количество продуктов
 */
const getProductsTotal =
  () =>
  (state: RootReducerType): number =>
    state.productsReducer.productsData.total;

/**
 * ## [Селектор] Получить настройки для продуктов
 *
 * @returns {SettingsFieldType[]} Настройки для продуктов
 */
const getSettingsFields =
  () =>
  (state: RootReducerType): SettingsFieldType[] =>
    state.productsReducer.settingsFields;

export const selectors = {
  getProductsData,
  getProductsDataForEdit,
  getProducts,
  getProductsTotal,
  getSettingsFields,
};
