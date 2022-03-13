import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  SET_PRODUCTS,
  DELETE_PRODUCTS,
  SET_PRODUCTS_ERROR,
  SET_SETTINGS_FIELDS,
  SET_SETTINGS_FIELDS_ERROR,
  ProductActionType,
  SET_PRODUCTS_FOR_EDIT,
  SAVE_PRODUCTS,
} from "./actions";
import { ErrorType, ProductType, SettingsFieldType } from "./types";

const initialState = {
  productsData: {
    products: [] as ProductType[],
    total: 0,
  },
  productsDataForEdit: {
    products: [] as ProductType[],
    total: 0,
  },
  errors: {
    products: null as ErrorType,
    settingsFields: null as ErrorType,
  },
  settingsFields: [] as SettingsFieldType[],
};

type InitialStateType = typeof initialState;

export const productsReducer = (
  state = initialState,
  action: ProductActionType
): InitialStateType => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productsData: { ...action.payload },
        errors: {
          ...state.errors,
          products: null,
        },
      };
    case SET_PRODUCTS_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          products: action.payload,
        },
      };
    case SET_PRODUCTS_FOR_EDIT:
      return {
        ...state,
        productsDataForEdit: { ...action.payload },
        errors: {
          ...state.errors,
          products: null,
        },
      };
    case SAVE_PRODUCTS: {
      const { ids, products } = action.payload;

      return {
        ...state,
        productsData: {
          ...state.productsData,
          products: state.productsData.products.map((productItem) => {
            if (ids.includes(productItem.id)) {
              const productEdit = products.find(
                (product) => product.id === productItem.id
              );

              if (productEdit) {
                return productEdit;
              }
            }

            return productItem;
          }),
        },
      };
    }
    case ADD_PRODUCT:
      return {
        ...state,
        productsData: {
          ...state.productsData,
          products: [...state.productsData.products, action.payload],
        },
      };
    case DELETE_PRODUCTS:
      return {
        ...state,
        productsData: {
          ...state.productsData,
          products: [
            ...state.productsData.products.filter(
              (product) => !action.payload.includes(product.id)
            ),
          ],
        },
      };
    case EDIT_PRODUCT:
      return state;
    case SET_SETTINGS_FIELDS:
      return {
        ...state,
        settingsFields: [...action.payload],
        errors: {
          ...state.errors,
          settingsFields: null,
        },
      };
    case SET_SETTINGS_FIELDS_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          settingsFields: action.payload,
        },
      };
    default:
      return state;
  }
};
