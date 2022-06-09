import { PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./ducks";
import { ProductsDataType, ProductsSaveType, SettingsFieldType } from "./types";

/**
 * ## [Экшин] Установить список продуктов
 *
 * @param {InitialState} state Состояние модуля
 * @param {PayloadAction<ProductsDataType>} action Экшин действия
 *
 * @returns {void}
 */
export const setProducts = (
  state: InitialState,
  { payload }: PayloadAction<ProductsDataType>
): void => {
  state.productsData = { ...payload };
};

/**
 * ## [Экшин] Сохранить продукты
 *
 * @param {InitialState} state Состояние модуля
 * @param {PayloadAction<ProductsSaveType>} action Экшин действия
 *
 * @returns {void}
 */
export const saveProducts = (
  state: InitialState,
  { payload }: PayloadAction<ProductsSaveType>
): void => {
  const { ids, products } = payload;

  state.productsData.products = state.productsData.products.map(
    (productItem) => {
      if (ids.includes(productItem.id)) {
        const productEdit = products.find(
          (product) => product.id === productItem.id
        );

        if (productEdit) {
          return productEdit;
        }
      }

      return productItem;
    }
  );
};

/**
 * ## [Экшин] Установить продукты для редактирования
 *
 * @param {InitialState} state Состояние модуля
 * @param {PayloadAction<ProductsDataType>} action Экшин действия
 *
 * @returns {void}
 */
export const setProductsForEdit = (
  state: InitialState,
  { payload }: PayloadAction<ProductsDataType>
): void => {
  state.productsDataForEdit = payload;
};

/**
 * ## [Экшин] Установить настройки для продуктов
 *
 * @param {InitialState} state Состояние модуля
 * @param {PayloadAction<SettingsFieldType[]>} action Экшин действия
 *
 * @returns {void}
 */
export const setSettingsFields = (
  state: InitialState,
  { payload }: PayloadAction<SettingsFieldType[]>
): void => {
  state.settingsFields = payload;
};
